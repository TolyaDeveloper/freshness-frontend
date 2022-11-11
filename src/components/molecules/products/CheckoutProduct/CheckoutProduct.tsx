import { cnb } from 'cnbuilder'
import { CheckoutProductProps } from './CheckoutProduct.props'
import { Typography, Rating } from '~/components/atoms'
import {
  QuantityPicker,
  AddToWishlist,
  AddToCompare,
  RemoveFromCheckout
} from '~/components/molecules'
import { useRouter } from 'next/router'
import { useUserContext } from '~/context/UserContext/User.context'
import Image from 'next/image'

import styles from './CheckoutProduct.module.scss'

const CheckoutProduct = ({ className, product }: CheckoutProductProps) => {
  const { imageUri, title, farm, freshness, price, oldPrice, rating, _id } =
    product
  const { locale } = useRouter()
  const {
    state: { user }
  } = useUserContext()

  const quantity = user.cart.find(
    cartProduct => cartProduct.productId === _id
  )?.quantity
  const variant = user.cart.find(
    cartProduct => cartProduct.productId === _id
  )?.variant

  return (
    <div className={cnb(styles.checkoutProduct, className)}>
      <div>
        <Image
          className={styles.image}
          src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${imageUri}`}
          width={100}
          height={70}
          objectFit="cover"
          alt={title}
        />
        <AddToWishlist productId={_id} variant="plain" size="sm">
          Wishlist
        </AddToWishlist>
        <AddToCompare productId={_id} size="sm" />
        <RemoveFromCheckout productId={_id} />
      </div>
      <div>
        <Typography className={styles.title} level="body3" component="h3">
          {title}
        </Typography>
        <div className={styles.oneItemWrapper}>
          <Typography level="body4" color="primary2">
            Farm
          </Typography>
          <Typography level="body4">{farm}</Typography>
        </div>
        <div className={styles.oneItemWrapper}>
          <Typography level="body4" color="primary2">
            Freshness
          </Typography>
          <Typography level="body4">{freshness}</Typography>
        </div>
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
      </div>
      <QuantityPicker
        className={styles.quantityPicker}
        disabled
        productAmount={quantity}
        productVariant={variant}
      />
    </div>
  )
}

export default CheckoutProduct
