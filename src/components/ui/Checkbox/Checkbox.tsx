import { CheckboxProps } from './Checkbox.props'
import { cnb } from 'cnbuilder'
import CheckedIcon from './checked.svg'

import styles from './Checkbox.module.scss'

const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
  return (
    <label className={cnb(styles.label, className)} {...props}>
      <input className={cnb(styles.checkbox)} type="checkbox" />
      <span className={styles.customCheckbox}>
        <CheckedIcon className={cnb(styles.checkedIcon)} />
      </span>
      {label}
    </label>
  )
}

export default Checkbox
