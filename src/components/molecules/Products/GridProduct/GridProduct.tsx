import { useRouter } from 'next/router'
import { cnb } from 'cnbuilder'
import { Button, Typography, Tag, Rating } from '~/components/atoms'
import { GridProductProps } from './GridProduct.props'
import { ROUTES } from '~/constants/routes'
import Link from 'next/link'
import Image from 'next/image'

import styles from './GridProduct.module.scss'

const GridProduct = ({
  product,
  className,
  setInCart,
  isAlreadyInCart
}: GridProductProps) => {
  const { locale } = useRouter()
  const { _id, imageUri, price, rating, smallDescription, title, newPrice } =
    product

  return (
    <div className={styles.productWrapper}>
      <Link href={`${ROUTES.products}/${_id}`} prefetch={false}>
        <a className={cnb(styles.product, className)}>
          <div className={styles.imageWrapper}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${imageUri}`}
              height="180px"
              layout="intrinsic"
              width="100%"
              objectFit="cover"
              quality={100}
              alt={title}
            />
            <Tag className={styles.discountTag} size="sm">
              -36%
            </Tag>
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
          <div className={styles.bottomBlock}>
            <div className={styles.priceBlock}>
              {newPrice && (
                <Typography
                  className={styles.newPrice}
                  level="body5"
                  color="primary2"
                >
                  12.78
                </Typography>
              )}

              <Typography level="body1" color="primary4">
                {new Intl.NumberFormat(locale, {
                  style: 'currency',
                  currency: 'USD',
                  currencyDisplay: 'code'
                }).format(price)}
              </Typography>
            </div>
          </div>
        </a>
      </Link>
      {isAlreadyInCart ? (
        <Button
          className={styles.buyButton}
          onClick={setInCart}
          size="sm"
          href={ROUTES.cart}
        >
          View in cart
        </Button>
      ) : (
        <Button
          className={styles.buyButton}
          onClick={setInCart}
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
