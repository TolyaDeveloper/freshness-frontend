import { forwardRef, LegacyRef } from 'react'
import { cnb } from 'cnbuilder'
import { CheckboxProps } from './Checkbox.props'
import CheckedIcon from '~/assets/icons/checked.svg'

import styles from './Checkbox.module.scss'

const Checkbox = (
  { className, label, labelTextClassname, ...props }: CheckboxProps,
  ref: LegacyRef<HTMLInputElement>
) => (
  <label className={cnb(styles.label, className)}>
    <input className={styles.checkbox} ref={ref} type="checkbox" {...props} />
    <span className={styles.customCheckbox}>
      <CheckedIcon className={styles.checkedIcon} />
    </span>
    {label && (
      <span className={cnb(styles.labelText, labelTextClassname)}>{label}</span>
    )}
  </label>
)

export default forwardRef(Checkbox)
