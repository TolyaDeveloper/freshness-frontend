import { Button } from '~/components/atoms'
import { useUserContext } from '~/context/UserContext/User.context'
import { RemoveFromCheckoutProps } from './RemoveFromCheckout.props'
import userService from '~/services/user.service'
import RemoveIcon from '~/assets/icons/checkout-remove.svg'

const RemoveFromCheckout = ({
  className,
  productId
}: RemoveFromCheckoutProps) => {
  const {
    state: { isAuthenticated },
    dispatch
  } = useUserContext()

  const onRemoveFromCheckout = async () => {
    if (isAuthenticated) {
      const { data: updated } = await userService.removeFromCart(productId)

      return dispatch({ type: 'SET_CART', payload: updated.cart })
    }

    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }
  return (
    <Button
      className={className}
      variant="plain"
      startAdornment={<RemoveIcon />}
      type="button"
      aria-label="Remove product from checkout"
      size="sm"
      onClick={onRemoveFromCheckout}
    >
      Remove
    </Button>
  )
}

export default RemoveFromCheckout
