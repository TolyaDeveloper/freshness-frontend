import { cnb } from 'cnbuilder'
import { InputLabelProps } from './InputLabel.props'

import styles from './InputLabel.module.scss'

const InputLabel = ({ children, className, ...props }: InputLabelProps) => {
  return (
    <label className={cnb(styles.label, className)} {...props}>
      {children}
    </label>
  )
}

export default InputLabel
