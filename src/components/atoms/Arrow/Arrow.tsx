import { cnb } from 'cnbuilder'
import { ArrowProps } from './Arrow.props'
import ArrowIcon from './arrow.svg'

import styles from './Arrow.module.scss'

const Arrow = ({
  className,
  color = 'secondary',
  orientation = 'right',
  ...props
}: ArrowProps) => (
  <ArrowIcon
    className={cnb(styles.arrow, styles[color], styles[orientation], className)}
    {...props}
  />
)

export default Arrow
