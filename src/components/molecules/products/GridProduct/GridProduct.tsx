import { useRouter } from 'next/router'
import { cnb } from 'cnbuilder'
import { Button, Typography, Tag, Rating } from '~/components/atoms'
import { GridProductProps } from './GridProduct.props'
import { ROUTES } from '~/constants/routes'
import { useAppContext } from '~/context/AppContext/App.context'
import { LocalStorageService } from '~/services/localStorage.service'
import { countDiscountPercentage } from '~/utils/countDiscountPercentage'
import Link from 'next/link'
import Image from 'next/image'

import styles from './GridProduct.module.scss'

const GridProduct = ({ product, className }: GridProductProps) => {
  const { locale } = useRouter()
  const { dispatch, state } = useAppContext()
  const { _id, imageUri, price, rating, smallDescription, title, oldPrice } =
    product
  const isAlreadyInCart = state.cart.includes(_id)

  const onAddToCart = () => {
    dispatch({ type: 'SET_CART', payload: _id })

    LocalStorageService.setItem('products', [...state.cart, _id])
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
          {oldPrice && (
            <Typography
              className={styles.newPrice}
              level="body5"
              color="primary2"
            >
              {oldPrice}
            </Typography>
          )}
          <Typography level="body1" color="primary4">
            {new Intl.NumberFormat(locale, {
              style: 'currency',
              currency: 'USD',
              currencyDisplay: 'code'
            }).format(price)}
          </Typography>
        </a>
      </Link>
      {isAlreadyInCart ? (
        <Link href={ROUTES.cart} passHref>
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
