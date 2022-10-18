import { cnb } from 'cnbuilder'
import { Button } from '~/components/atoms'
import { AddToWishlistProps } from './AddToWishlist.props'
import { useAppContext } from '~/context/AppContext/App.context'
import { LocalStorageService } from '~/services/localStorage.service'
import WishListIcon from '~/assets/icons/wishlist.svg'

import styles from './AddToWishlist.module.scss'
import { useEffect } from 'react'

const AddToWishlist = ({ className, productId }: AddToWishlistProps) => {
  const { dispatch, state } = useAppContext()

  const isInWishlist = state.wishlist.includes(productId)

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
