import { cnb } from 'cnbuilder'
import { Button } from '~/components/atoms'
import { AddToWishlistProps } from './AddToWishlist.props'
import { useUserContext } from '~/context/UserContext/User.context'
import userService from '~/services/user.service'
import WishListIcon from '~/assets/icons/wishlist.svg'

import styles from './AddToWishlist.module.scss'

const AddToWishlist = ({
  className,
  productId,
  children,
  variant = 'solid',
  size = 'md'
}: AddToWishlistProps) => {
  const { dispatch, state } = useUserContext()

  const isInWishlist = state.user.wishlist.includes(productId)

  const onAddToWishlist = async () => {
    if (state.isAuthenticated) {
      if (!isInWishlist) {
        const { data: updated } = await userService.addToWishlist(productId)

        return dispatch({ type: 'SET_WISHLIST', payload: updated.wishlist })
      }

      const { data: updated } = await userService.removeFromWishlist(productId)

      return dispatch({ type: 'SET_WISHLIST', payload: updated.wishlist })
    }

    if (!isInWishlist) {
      dispatch({ type: 'SET_WISHLIST', payload: productId })

      return dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
    }

    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
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
      {children}
    </Button>
  )
}

export default AddToWishlist
