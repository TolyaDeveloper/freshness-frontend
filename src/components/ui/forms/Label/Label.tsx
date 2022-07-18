import { cnb } from 'cnbuilder'
import { LabelProps } from './Label.props'

import styles from './Label.module.scss'

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label className={cnb(styles.label, className)} {...props}>
      {children}
    </label>
  )
}

export default Label
