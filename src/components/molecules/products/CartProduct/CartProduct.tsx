import { CartProductProps } from './CartProduct.props'
import { cnb } from 'cnbuilder'
import { PAGES } from '~/constants/routes'
import { Button, Rating, Tag, Typography } from '~/components/atoms'
import { countDiscountPercentage } from '~/utils/countDiscountPercentage'
import { useRouter } from 'next/router'
import { useUserContext } from '~/context/UserContext/User.context'
import { IQuantityPicker } from '~/interfaces/quantity-picker.interface'
import QuantityPicker from '../../QuantityPicker/QuantityPicker'
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

  const onChangePicker = async (quantity: IQuantityPicker, error: boolean) => {
    if (error) {
      return
    }

    const newCartProduct = {
      productId: _id,
      quantity: +quantity.productAmount,
      variant: quantity.productVariant
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
      <QuantityPicker
        className={styles.quantityPicker}
        onChange={onChangePicker}
        productAmount={quantity}
        productVariant={variant}
      />
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
