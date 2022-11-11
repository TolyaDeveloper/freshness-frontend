import { cnb } from 'cnbuilder'
import { RowProductProps } from './RowProduct.props'
import { Typography, Button, Rating, Arrow } from '~/components/atoms'
import { useRouter } from 'next/router'
import { PAGES } from '~/constants/routes'
import AddToWishlist from '../../AddToWishlist/AddToWishlist'
import Image from 'next/image'
import Link from 'next/link'

import styles from './RowProduct.module.scss'

const RowProduct = ({ className, product }: RowProductProps) => {
  const { locale } = useRouter()
  const {
    _id,
    title,
    price,
    oldPrice,
    deliveryArea,
    deliveryTime,
    freshness,
    farm,
    imageUri,
    rating,
    smallDescription,
    inStock
  } = product
  return (
    <div className={cnb(styles.rowProduct, className)}>
      <Image
        className={styles.productImage}
        src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${imageUri}`}
        width={270}
        height={280}
        layout="responsive"
        objectFit="cover"
        alt={title}
      />
      <div className={styles.middleDescriptionWrapper}>
        <Typography className={styles.title} level="h2-md">
          {title}
        </Typography>
        <Typography className={styles.smallDescription} level="body6">
          {smallDescription}
        </Typography>
        <Rating className={styles.rating} rating={rating} />
        <div className={styles.middleDescription}>
          <Typography level="body4" color="primary2">
            Freshness
          </Typography>
          <Typography level="body4" color="primary2">
            {freshness}
          </Typography>
          <Typography level="body4" color="primary2">
            Farm
          </Typography>
          <Typography level="body4" color="primary2">
            {farm}
          </Typography>
          <Typography level="body4" color="primary2">
            Delivery
          </Typography>
          {deliveryArea.map(area => (
            <Typography key={area} level="body4" color="primary2">
              {area}
            </Typography>
          ))}
          <Typography level="body4" color="primary2">
            Stock
          </Typography>
          <Typography level="body4" color="primary2">
            {inStock ? 'In stock' : 'Not available'}
          </Typography>
        </div>
      </div>
      <div className={styles.endBlock}>
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
        <Typography
          className={styles.deliveryTime}
          level="body5"
          color="primary2"
        >
          Delivery in {deliveryTime}
        </Typography>
        <Link href={`${PAGES.products}/${_id}`} passHref>
          <Button
            className={styles.productDetail}
            endAdornment={<Arrow color="primary1" />}
          >
            Product Detail
          </Button>
        </Link>
        <AddToWishlist productId={_id} variant="soft">
          Add to wishlist
        </AddToWishlist>
      </div>
    </div>
  )
}

export default RowProduct
