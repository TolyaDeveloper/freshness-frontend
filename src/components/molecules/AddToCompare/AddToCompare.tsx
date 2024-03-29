import { cnb } from 'cnbuilder'
import { Button } from '~/components/atoms'
import { AddToCompareProps } from './AddToCompare.props'
import { useUserContext } from '~/context/UserContext/User.context'
import userService from '~/services/user.service'
import CompareIcon from '~/assets/icons/compare.svg'

import styles from './AddToCompare.module.scss'

const AddToCompare = ({
  className,
  productId,
  size = 'md'
}: AddToCompareProps) => {
  const { dispatch, state } = useUserContext()

  const isInCompare = state.user.compare.includes(productId)

  const onAddToCompare = async () => {
    if (state.isAuthenticated) {
      if (!isInCompare) {
        const { data: updated } = await userService.addToCompare(productId)

        return dispatch({ type: 'SET_COMPARE', payload: updated.compare })
      }

      const { data: updated } = await userService.removeFromCompare(productId)

      return dispatch({ type: 'SET_COMPARE', payload: updated.compare })
    }

    if (!isInCompare) {
      dispatch({ type: 'SET_COMPARE', payload: productId })

      return dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
    }

    dispatch({ type: 'REMOVE_FROM_COMPARE', payload: productId })
    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: true })
  }

  return (
    <Button
      className={cnb(styles.button, className)}
      variant={isInCompare ? 'outlined' : 'plain'}
      startAdornment={<CompareIcon />}
      aria-label="Add to compare list"
      size={size}
      type="button"
      onClick={onAddToCompare}
    >
      {isInCompare ? 'Compared' : 'Compare'}
    </Button>
  )
}

export default AddToCompare
