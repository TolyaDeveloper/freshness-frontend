import { WishlistProps } from './Wishlist.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { Typography, Button } from '~/components/atoms'
import { ROUTES } from '~/constants/routes'
import { buildQueriesFromArray } from '~/utils/queries'
import { IProduct } from '~/interfaces/product.interface'
import { GridProduct } from '~/components/molecules'
import { $api } from '~/api'
import useSWR from 'swr'
import Link from 'next/link'

import styles from './Wishlist.module.scss'

const Wishlist = ({}: WishlistProps) => {
  const {
    state: { user, isAuthenticated },
    dispatch
  } = useUserContext()

  const { data: products } = useSWR<IProduct[]>(
    user.wishlist.length !== 0
      ? `${ROUTES.user_products_ids}?${buildQueriesFromArray(user.wishlist)}`
      : null
  )

  if (user.wishlist.length === 0) {
    return (
      <div className={styles.emptyWishlistWrapper}>
        <Typography level="h2-lg">Wishlist is empty</Typography>
        <Link href={ROUTES.home} passHref>
          <Button className={styles.moreLink} variant="outlined">
            Find more products
          </Button>
        </Link>
      </div>
    )
  }

  const onRemoveFromWishlist = async (productId: string) => {
    if (isAuthenticated) {
      const { data: updated } = await $api.patch(ROUTES.user_wishlist_remove, {
        productId
      })

      return dispatch({ type: 'SET_WISHLIST', payload: updated.wishlist })
    }

    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  if (!products) {
    return null
  }

  return (
    <ul className="grid-product">
      {products.map(product => (
        <li key={product._id}>
          <GridProduct product={product} />
          <Button
            className="full-width-button"
            type="button"
            variant="plain"
            aria-label="Remove product from wishlist"
            onClick={() => onRemoveFromWishlist(product._id)}
          >
            Remove
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default Wishlist
