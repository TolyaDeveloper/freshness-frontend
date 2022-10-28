import { cnb } from 'cnbuilder'
import { Button } from '~/components/atoms'
import { AddToWishlistProps } from './AddToWishlist.props'
import { useUserContext } from '~/context/UserContext/User.context'
import WishListIcon from '~/assets/icons/wishlist.svg'

import styles from './AddToWishlist.module.scss'

const AddToWishlist = ({ className, productId }: AddToWishlistProps) => {
  const { dispatch, state } = useUserContext()

  const isInWishlist = state.user.wishlist.includes(productId)

  const onAddToWishlist = () => {
    if (!isInWishlist) {
      return dispatch({ type: 'SET_WISHLIST', payload: productId })
    }

    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId })
  }

  return (
    <Button
      className={className}
      variant="plain"
      startAdornment={
        <WishListIcon
          className={cnb({
            [styles.wishlistIcon]: isInWishlist,
            [styles.animateHeart]: isInWishlist
          })}
        />
      }
      aria-label="Add to wishlist"
      type="button"
      onClick={onAddToWishlist}
    >
      Add to my wishlist
    </Button>
  )
}

export default AddToWishlist
