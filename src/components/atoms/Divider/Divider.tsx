import { cnb } from 'cnbuilder'
import { DividerProps } from './Divider.props'

import styles from './Divider.module.scss'

const Divider = ({
  className,
  orienation = 'horizontal',
  color = 'primary1',
  ...props
}: DividerProps) => (
  <div
    className={cnb(
      styles.divider,
      styles[orienation],
      styles[color],
      className
    )}
    {...props}
  />
)
export default Divider
