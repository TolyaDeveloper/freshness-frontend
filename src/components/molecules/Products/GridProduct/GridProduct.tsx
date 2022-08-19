import { cnb } from 'cnbuilder'
import { Button, Typography, Tag, Rating } from '~/components/atoms'
import { GridProductProps } from './GridProduct.props'
import { ROUTES } from '~/constants/routes'
import Link from 'next/link'
import Image from 'next/image'

import styles from './GridProduct.module.scss'

const GridProduct = ({ product, className }: GridProductProps) => {
  const { _id, imageUri, price, rating, smallDescription, title, newPrice } =
    product

  return (
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
          <Tag size="sm">-36%</Tag>
        </div>
        <Typography level="h2-sm">{title}</Typography>
        <Typography level="body6" color="primary3">
          {smallDescription}
        </Typography>
        <Rating rating={rating} />
        <div className={styles.bottomBlock}>
          <div className={styles.priceBlock}>
            <Typography level="body1">{newPrice}</Typography>
            <Typography level="body5" color="primary2">
              {price}
            </Typography>
          </div>
          <Button size="sm" type="button">
            Buy now
          </Button>
        </div>
      </a>
    </Link>
  )
}

export default GridProduct
