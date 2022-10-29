import { cnb } from 'cnbuilder'
import { Button } from '~/components/atoms'
import { AddToCompareProps } from './AddToCompare.props'
import { useUserContext } from '~/context/UserContext/User.context'
import { $api } from '~/api'
import { IUser } from '~/interfaces/user.interface'
import { ROUTES } from '~/constants/routes'
import CompareIcon from '~/assets/icons/compare.svg'

import styles from './AddToCompare.module.scss'
import { LocalStorageService } from '~/services/localStorage.service'

const AddToCompare = ({ className, productId }: AddToCompareProps) => {
  const { dispatch, state } = useUserContext()

  const isInCompare = state.user.compare.includes(productId)

  const onAddToCompare = async () => {
    if (state.isAuthenticated) {
      if (!isInCompare) {
        const { data: updated } = await $api.patch<Pick<IUser, 'compare'>>(
          ROUTES.user_compare_add,
          { productId }
        )

        return dispatch({ type: 'SET_COMPARE', payload: updated.compare })
      }

      const { data: updated } = await $api.patch<Pick<IUser, 'compare'>>(
        ROUTES.user_compare_remove,
        { productId }
      )

      return dispatch({ type: 'SET_COMPARE', payload: updated.compare })
    }

    // ? refactor
    if (!isInCompare) {
      LocalStorageService.setItem('compare', [...state.user.compare, productId])

      return dispatch({ type: 'SET_COMPARE', payload: productId })
    }

    dispatch({ type: 'REMOVE_FROM_COMPARE', payload: productId })

    const compareStorage: string[] = LocalStorageService.getItem('compare')
    LocalStorageService.setItem(
      'compare',
      compareStorage.filter(item => item !== productId)
    )
  }

  return (
    <Button
      className={cnb(styles.button, className)}
      variant={isInCompare ? 'outlined' : 'plain'}
      startAdornment={<CompareIcon />}
      aria-label="Add to compare list"
      type="button"
      onClick={onAddToCompare}
    >
      {isInCompare ? 'Compared' : 'Compare'}
    </Button>
  )
}

export default AddToCompare
