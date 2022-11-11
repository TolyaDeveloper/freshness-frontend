import { cnb } from 'cnbuilder'
import { LayoutCheckerProps } from './LayoutChecker.props'
import { useAppContext } from '~/context/AppContext/App.context'
import { Typography } from '~/components/atoms'
import GridViewIcon from '~/assets/icons/grid-view.svg'
import ListViewIcon from '~/assets/icons/list-view.svg'

import styles from './LayoutChecker.module.scss'

const LayoutChecker = ({ className, layout }: LayoutCheckerProps) => {
  const { dispatch } = useAppContext()

  return (
    <div className={cnb(styles.layoutChecker, className)}>
      <button
        className={cnb(styles.button, { [styles.active]: layout === 'grid' })}
        onClick={() => dispatch({ type: 'SET_LAYOUT', payload: 'grid' })}
        type="button"
      >
        <Typography className={styles.text} level="body6" color="primary2">
          Grid view
        </Typography>
        <GridViewIcon />
      </button>
      <button
        className={cnb(styles.button, { [styles.active]: layout === 'list' })}
        onClick={() => dispatch({ type: 'SET_LAYOUT', payload: 'list' })}
        type="button"
      >
        <Typography className={styles.text} level="body6" color="primary2">
          List view
        </Typography>
        <ListViewIcon />
      </button>
    </div>
  )
}

export default LayoutChecker
