import { cnb } from 'cnbuilder'
import { Button } from '~/components/atoms'
import { AddToCompareProps } from './AddToCompare.props'
import { useAppContext } from '~/context/AppContext/App.context'
import CompareIcon from '~/assets/icons/compare.svg'

import styles from './AddToCompare.module.scss'

const AddToCompare = ({ className, productId }: AddToCompareProps) => {
  const { dispatch, state } = useAppContext()

  const isInCompare = state.compare.includes(productId)

  const onAddToCompare = () => {
    if (!isInCompare) {
      return dispatch({ type: 'SET_COMPARE', payload: productId })
    }

    dispatch({ type: 'REMOVE_FROM_COMPARE', payload: productId })
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
