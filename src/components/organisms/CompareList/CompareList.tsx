import { CompareListProps } from './CompareList.props'
import { buildQueriesFromArray } from '~/utils/queries'
import { useUserContext } from '~/context/UserContext/User.context'
import { ROUTES } from '~/constants/routes'
import { Button, Rating, Typography } from '~/components/atoms'
import { IProduct } from '~/interfaces/product.interface'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { $api } from '~/api'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'

import styles from './CompareList.module.scss'
import { LocalStorageService } from '~/services/localStorage.service'

const CompareList = ({}: CompareListProps) => {
  const { locale } = useRouter()
  const {
    state: { user, isAuthenticated },
    dispatch
  } = useUserContext()
  const { data: products } = useSWR<IProduct[]>(
    user.compare.length !== 0
      ? `${ROUTES.user_products_ids}?${buildQueriesFromArray(user.compare)}`
      : null
  )

  if (user.compare.length === 0) {
    return (
      <div className={styles.emptyCompareWrapper}>
        <Typography level="h2-lg">Compare is empty</Typography>
        <Link href={ROUTES.home} passHref>
          <Button className={styles.moreLink} variant="outlined">
            Find more products
          </Button>
        </Link>
      </div>
    )
  }

  const onRemoveFromCompare = async (productId: string) => {
    if (isAuthenticated) {
      const { data: updated } = await $api.patch(ROUTES.user_compare_remove, {
        productId
      })

      return dispatch({ type: 'SET_COMPARE', payload: updated.compare })
    }

    dispatch({ type: 'REMOVE_FROM_COMPARE', payload: productId })

    const compareStorage: string[] = LocalStorageService.getItem('compare')
    LocalStorageService.setItem(
      'compare',
      compareStorage.filter(item => item !== productId)
    )
  }

  if (!products) {
    return null
  }

  return (
    <div className={styles.sectionWrapper}>
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
