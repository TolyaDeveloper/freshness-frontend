import { WishlistProps } from './Wishlist.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { Button } from '~/components/atoms'
import { EmptyData } from '~/components/molecules'
import { API } from '~/constants/routes'
import { buildQueriesFromArray } from '~/utils/queries'
import { IProduct } from '~/interfaces/product.interface'
import { GridProduct } from '~/components/molecules'
import userService from '~/services/user.service'
import useSWR from 'swr'

import styles from './Wishlist.module.scss'

const Wishlist = ({}: WishlistProps) => {
  const {
    state: { user, isAuthenticated },
    dispatch
  } = useUserContext()

  const { data: products } = useSWR<IProduct[]>(
    `${API.user_products_ids}?${buildQueriesFromArray(user.wishlist)}`
  )

  if (user.wishlist.length === 0) {
    return <EmptyData title="Wishlist is empty" />
  }

  const onRemoveFromWishlist = async (productId: string) => {
    if (isAuthenticated) {
      const { data: updated } = await userService.removeFromWishlist(productId)

      return dispatch({ type: 'SET_WISHLIST', payload: updated.wishlist })
    }

    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  return (
    <ul className="grid-product">
      {products?.map(product => (
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
