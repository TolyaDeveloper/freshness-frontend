import { OrderHistoryProductProps } from './OrderHistoryProduct.props'
import { PAGES } from '~/constants/routes'
import { cnb } from 'cnbuilder'
import { Rating, Typography } from '~/components/atoms'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import styles from './OrderHistoryProduct.module.scss'

// ? refactor

const OrderHistoryProduct = ({
  className,
  product
}: OrderHistoryProductProps) => {
  const { locale } = useRouter()
  const { _id, imageUri, title, price, oldPrice, smallDescription, rating } =
    product

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
    </div>
  )
}

export default OrderHistoryProduct
