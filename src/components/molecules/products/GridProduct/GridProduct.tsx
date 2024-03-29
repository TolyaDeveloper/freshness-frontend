import { useRouter } from 'next/router'
import { cnb } from 'cnbuilder'
import { Button, Typography, Tag, Rating } from '~/components/atoms'
import { GridProductProps } from './GridProduct.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { countDiscountPercentage } from '~/utils/countDiscountPercentage'
import { PAGES } from '~/constants/routes'
import { ICart, ProductCartVariantEnum } from '~/interfaces/cart.interface'
import userService from '~/services/user.service'
import Link from 'next/link'
import Image from 'next/image'

import styles from './GridProduct.module.scss'

const GridProduct = ({ className, product }: GridProductProps) => {
  const { locale } = useRouter()
  const { dispatch, state } = useUserContext()
  const { _id, imageUri, price, rating, smallDescription, title, oldPrice } =
    product
  const isAlreadyInCart = state.user.cart.find(item => item.productId === _id)
  const cartProduct: ICart = {
    productId: _id,
    quantity: 1,
    variant: ProductCartVariantEnum.PCS
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
      {isAlreadyInCart ? (
        <Link href={PAGES.cart} passHref>
          <Button className={styles.buyButton} variant="outlined" size="sm">
            View in cart
          </Button>
        </Link>
      ) : (
        <Button
          className={styles.buyButton}
          onClick={onAddToCart}
          size="sm"
          type="button"
        >
          Buy now
        </Button>
      )}
    </div>
  )
}

export default GridProduct
