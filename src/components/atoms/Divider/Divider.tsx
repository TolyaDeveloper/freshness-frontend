import { cnb } from 'cnbuilder'
import { DividerProps } from './Divider.props'

import styles from './Divider.module.scss'

const Divider = ({ className, ...props }: DividerProps) => {
  return <div className={cnb(styles.divider, className)} {...props} />
}

export default Divider
