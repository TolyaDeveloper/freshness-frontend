import { cnb } from 'cnbuilder'
import { Button } from '~/components/atoms'
import { AddToWishlistProps } from './AddToWishlist.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { $api } from '~/api'
import WishListIcon from '~/assets/icons/wishlist.svg'

import styles from './AddToWishlist.module.scss'
import { ROUTES } from '~/constants/routes'
import { IUser } from '~/interfaces/user.interface'

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
      try {
        const { data: updated } = await $api.patch<Pick<IUser, 'wishlist'>>(
          ROUTES.user_wishlist_add,
          {
            productId
          }
        )

        console.log({ updated })

        return dispatch({ type: 'SET_WISHLIST', payload: updated.wishlist })
      } catch (error) {
        console.log(error)
      }
    }

    if (!isInWishlist) {
      return dispatch({ type: 'SET_WISHLIST', payload: productId })
    }

    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId })
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
