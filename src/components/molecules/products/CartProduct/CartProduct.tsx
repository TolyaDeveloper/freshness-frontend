import { CartProductProps } from './CartProduct.props'
import { cnb } from 'cnbuilder'
import { PAGES } from '~/constants/routes'
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
import { ProductCartVariantEnum } from '~/interfaces/cart.interface'
import { ChangeEvent, useState } from 'react'
import { useUserContext } from '~/context/UserContext/User.context'
import userService from '~/services/user.service'
import Link from 'next/link'
import Image from 'next/image'

import styles from './CartProduct.module.scss'

const CartProduct = ({ className, product }: CartProductProps) => {
  const { _id, imageUri, title, price, oldPrice, smallDescription, rating } =
    product
  const {
    state: { user, isAuthenticated },
    dispatch
  } = useUserContext()
  const quantity = user.cart.find(
    cartProduct => cartProduct.productId === _id
  )?.quantity
  const variant = user.cart.find(
    cartProduct => cartProduct.productId === _id
  )?.variant

  const { locale } = useRouter()
  const [productAmount, setProductAmount] = useState(quantity as number)
  const [selectedType, setSelectedType] = useState(
    variant as ProductCartVariantEnum
  )

  const onHandleQuantity = async (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = +e.target.value

    setProductAmount(newQuantity)

    const newCartProduct = {
      productId: _id,
      quantity: newQuantity,
      variant: selectedType
    }

    if (isAuthenticated) {
      const { data: updated } = await userService.updateCart(newCartProduct)

      return dispatch({ type: 'SET_CART', payload: updated.cart })
    }

    dispatch({
      type: 'UPDATE_CART',
      payload: newCartProduct
    })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  const onHandleType = async (e: ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as ProductCartVariantEnum

    setSelectedType(newType)

    const newCartProduct = {
      productId: _id,
      quantity: productAmount,
      variant: newType
    }

    if (isAuthenticated) {
      const { data: updated } = await userService.updateCart(newCartProduct)

      return dispatch({ type: 'SET_CART', payload: updated.cart })
    }

    dispatch({
      type: 'UPDATE_CART',
      payload: { productId: _id, quantity: productAmount, variant: newType }
    })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  const onRemoveFromCart = async () => {
    if (isAuthenticated) {
      const { data: updated } = await userService.removeFromCart(_id)

      return dispatch({ type: 'SET_CART', payload: updated.cart })
    }

    dispatch({ type: 'REMOVE_FROM_CART', payload: _id })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  return (
    <div className={styles.productWrapper}>
      <Link href={`${PAGES.products}/${_id}`} prefetch={false}>
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
          onChange={onHandleQuantity}
          min={1}
          type="number"
        />
        <Divider className={styles.divider} orienation="vertical" />
        <Select
          endAdornment={<Arrow color="primary2" orientation="down" />}
          value={selectedType}
          onChange={onHandleType}
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
        onClick={onRemoveFromCart}
      >
        Remove
      </Button>
    </div>
  )
}

export default CartProduct
