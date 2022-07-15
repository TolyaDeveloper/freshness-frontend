import { cnb } from 'cnbuilder'
import { CheckboxProps } from './Checkbox.props'
import CheckedIcon from './checked.svg'

import styles from './Checkbox.module.scss'

const Checkbox = ({ className, label, ...props }: CheckboxProps) => {
  return (
    <label className={cnb(styles.label, className)}>
      <input className={styles.checkbox} type="checkbox" {...props} />
      <span className={styles.customCheckbox}>
        <CheckedIcon className={styles.checkedIcon} />
      </span>
      <span>{label}</span>
    </label>
  )
}

export default Checkbox
