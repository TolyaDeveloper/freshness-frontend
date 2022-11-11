import { cnb } from 'cnbuilder'
import { Fragment } from 'react'
import { CompareListProps } from './CompareList.props'
import { buildQueriesFromArray } from '~/utils/queries'
import { useUserContext } from '~/context/UserContext/User.context'
import { API } from '~/constants/routes'
import { Button, Rating, Typography } from '~/components/atoms'
import { EmptyData } from '~/components/molecules'
import { IProduct } from '~/interfaces/product.interface'
import { useRouter } from 'next/router'
import userService from '~/services/user.service'
import Image from 'next/image'
import useSWR from 'swr'

import styles from './CompareList.module.scss'

const CompareList = ({ className }: CompareListProps) => {
  const { locale } = useRouter()
  const {
    state: { user, isAuthenticated },
    dispatch
  } = useUserContext()
  const { data: products } = useSWR<IProduct[]>(
    user.compare.length !== 0
      ? `${API.user_products_ids}?${buildQueriesFromArray(user.compare)}`
      : null
  )

  if (user.compare.length === 0) {
    return <EmptyData title="Compare is empty" />
  }

  const onRemoveFromCompare = async (productId: string) => {
    if (isAuthenticated) {
      const { data: updated } = await userService.removeFromCompare(productId)

      return dispatch({ type: 'SET_COMPARE', payload: updated.compare })
    }

    dispatch({ type: 'REMOVE_FROM_COMPARE', payload: productId })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  if (!products) {
    return null
  }

  return (
    <div className={cnb(styles.sectionWrapper, className)}>
      {products.map(product => (
        <Fragment key={product._id}>
          <div className={styles.section}>
            <Button
              className={styles.removeFromCompare}
              variant="outlined"
              type="button"
              aria-label="Remove from compare list"
              onClick={() => onRemoveFromCompare(product._id)}
            >
              Remove
            </Button>
            <Image
              className={styles.image}
              src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${product.imageUri}`}
              width={250}
              height={180}
              objectFit="cover"
              alt={product.title}
            />
            <div className={styles.subSection}>
              <Typography level="body1">Rating</Typography>
              <Rating rating={product.rating} />
            </div>
            <div className={styles.subSection}>
              <Typography level="body1">Price</Typography>
              <Typography level="body4">
                {new Intl.NumberFormat(locale, {
                  style: 'currency',
                  currency: 'USD',
                  currencyDisplay: 'code'
                }).format(product.price)}
              </Typography>
            </div>
            <div className={styles.subSection}>
              <Typography level="body1">Name</Typography>
              <Typography level="body4">{product.title}</Typography>
            </div>
            <div className={styles.subSection}>
              <Typography level="body1">Farm</Typography>
              <Typography level="body4">{product.farm}</Typography>
            </div>
            <div className={styles.subSection}>
              <Typography level="body1">Biology</Typography>
              <Typography level="body4">{product.biology}</Typography>
            </div>
            <div className={styles.subSection}>
              <Typography level="body1">Buy by</Typography>
              <Typography level="body4">{product.buyBy}</Typography>
            </div>
            <div className={styles.subSection}>
              <Typography level="body1">Freshness</Typography>
              <Typography level="body4">{product.freshness}</Typography>
            </div>
            <div className={styles.subSection}>
              <Typography level="body1">In stock</Typography>
              <Typography level="body4">
                {product.inStock ? 'In stock' : 'Not in stock'}
              </Typography>
            </div>
            <div className={styles.subSection}>
              <Typography level="body1">Delivery time</Typography>
              <Typography level="body4">{product.deliveryTime}</Typography>
            </div>

            <div className={styles.subSection}>
              <Typography level="body1">Delivery area</Typography>
              {product.deliveryArea.map((area, index) => (
                <Typography key={index} level="body4">
                  {area}
                </Typography>
              ))}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default CompareList
