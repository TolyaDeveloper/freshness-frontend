import { CartProductProps } from './CartProduct.props'
import { cnb } from 'cnbuilder'
import { ROUTES } from '~/constants/routes'
import {
  Arrow,
  Button,
  Divider,
  FormStyledWrapper,
  Input,
  Rating,
  Select,
  Tag,
  Typography
} from '~/components/atoms'
import { countDiscountPercentage } from '~/utils/countDiscountPercentage'
import { useRouter } from 'next/router'
import { ICart, ProductCartVariantEnum } from '~/interfaces/cart.interface'
import { useState } from 'react'
import { useUserContext } from '~/context/UserContext/User.context'
import { $api } from '~/api'
import Link from 'next/link'
import Image from 'next/image'

import styles from './CartProduct.module.scss'

const CartProduct = ({ className, product }: CartProductProps) => {
  const {
    state: { user, isAuthenticated },
    dispatch
  } = useUserContext()
  const { _id, imageUri, price, rating, smallDescription, title, oldPrice } =
    product._id
  const { locale } = useRouter()
  const [productAmount, setProductAmount] = useState<number>(product.amount)
  const [selectedType, setSelectedType] = useState(product.variant)

  const onRemoveFromCart = async (_id: string) => {
    if (isAuthenticated) {
      const { data: updated } = await $api.patch<{ cart: ICart[] }>(
        ROUTES.user_cart_remove,
        { _id }
      )

      return dispatch({ type: 'SET_CART', payload: updated.cart })
    }

    dispatch({ type: 'REMOVE_FROM_CART', payload: _id })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  return (
    <div className={styles.productWrapper}>
      <Link href={`${ROUTES.products}/${_id}`} prefetch={false}>
        <a className={cnb(styles.product, className)}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.productImage}
              src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${imageUri}`}
              width={270}
              height={180}
              layout="responsive"
              objectFit="cover"
              alt={title}
            />
            {oldPrice && oldPrice > price && (
              <Tag className={styles.discountTag} size="sm">
                -{countDiscountPercentage(oldPrice, price)}%
              </Tag>
            )}
          </div>
          <Typography className={styles.title} level="h2-sm">
            {title}
          </Typography>
          <Typography
            className={styles.smallDescription}
            level="body6"
            color="primary3"
          >
            {smallDescription}
          </Typography>
          <Rating className={styles.rating} rating={rating} />
          <Typography level="body1" color="primary4">
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
              {oldPrice}
            </Typography>
          )}
        </a>
      </Link>
      <FormStyledWrapper className={styles.addBlock}>
        <Input
          value={productAmount}
          onChange={e => setProductAmount(+e.target.value)}
          min={1}
          type="number"
        />
        <Divider className={styles.divider} orienation="vertical" />
        <Select
          endAdornment={<Arrow color="primary2" orientation="down" />}
          value={selectedType}
          onChange={e =>
            setSelectedType(e.target.value as ProductCartVariantEnum)
          }
        >
          <option>{ProductCartVariantEnum.PCS}</option>
          <option>{ProductCartVariantEnum.KGS}</option>
          <option>{ProductCartVariantEnum.BOX}</option>
          <option>{ProductCartVariantEnum.PACK}</option>
        </Select>
      </FormStyledWrapper>
      <Button
        className="full-width-button"
        type="button"
        variant="plain"
        aria-label="Remove product from cart"
        onClick={() => onRemoveFromCart(product._id._id)}
      >
        Remove
      </Button>
    </div>
  )
}

export default CartProduct
