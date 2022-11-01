import { cnb } from 'cnbuilder'
import { useState } from 'react'
import { ProductAddToCartProps } from './ProductAddToCart.props'
import { useRouter } from 'next/router'
import { useUserContext } from '~/context/UserContext/User.context'
import {
  Arrow,
  Button,
  Divider,
  FormStyledWrapper,
  Input,
  Select,
  Typography
} from '~/components/atoms'
import { ICart, ProductCartVariantEnum } from '~/interfaces/cart.interface'
import { PAGES } from '~/constants/routes'
import userService from '~/services/user.service'
import AddIcon from '~/assets/icons/add.svg'
import Link from 'next/link'

import styles from './ProductAddToCart.module.scss'

const ProductAddToCart = ({
  className,
  productId,
  price,
  oldPrice
}: ProductAddToCartProps) => {
  const { locale } = useRouter()
  const { dispatch, state } = useUserContext()
  const isAlreadyInCart = state.user.cart.find(
    item => item.productId === productId
  )

  const [productAmount, setProductAmount] = useState<number>(1)
  const [selectedType, setSelectedType] = useState(ProductCartVariantEnum.PCS)

  const cartProduct: ICart = {
    productId,
    quantity: productAmount,
    variant: selectedType
  }

  const onAddToCart = async () => {
    if (state.isAuthenticated) {
      const { data: updated } = await userService.addToCart(cartProduct)

      return dispatch({
        type: 'SET_CART',
        payload: updated.cart
      })
    }

    dispatch({ type: 'SET_CART', payload: cartProduct })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  return (
    <div className={cnb(styles.priceBlock, className)}>
      <div>
        <Typography level="h2-xl" component="p" color="secondary">
          {new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code'
          }).format(price)}
        </Typography>
        {oldPrice && (
          <Typography
            className={styles.oldPrice}
            level="body5"
            color="primary2"
          >
            {new Intl.NumberFormat(locale, {
              style: 'currency',
              currency: 'USD',
              currencyDisplay: 'code'
            }).format(oldPrice)}
          </Typography>
        )}
      </div>
      <FormStyledWrapper className={styles.addBlock}>
        <Input
          value={productAmount}
          onChange={e => setProductAmount(+e.target.value)}
          min={1}
          type="number"
          disabled={Boolean(isAlreadyInCart)}
        />
        <Divider className={styles.divider} orienation="vertical" />
        <Select
          endAdornment={<Arrow color="primary2" orientation="down" />}
          value={selectedType}
          onChange={e =>
            setSelectedType(e.target.value as ProductCartVariantEnum)
          }
          disabled={Boolean(isAlreadyInCart)}
        >
          <option>{ProductCartVariantEnum.PCS}</option>
          <option>{ProductCartVariantEnum.KGS}</option>
          <option>{ProductCartVariantEnum.BOX}</option>
          <option>{ProductCartVariantEnum.PACK}</option>
        </Select>
      </FormStyledWrapper>
      {isAlreadyInCart ? (
        <Link href={PAGES.cart} passHref>
          <Button className={styles.buyButton} variant="outlined">
            View in cart
          </Button>
        </Link>
      ) : (
        <Button
          startAdornment={<AddIcon />}
          onClick={onAddToCart}
          type="button"
        >
          Add to cart
        </Button>
      )}
    </div>
  )
}

export default ProductAddToCart
