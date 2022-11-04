import { forwardRef, LegacyRef } from 'react'
import { cnb } from 'cnbuilder'
import { RadioProps } from './Radio.props'

import styles from './Radio.module.scss'

const Radio = (
  {
    className,
    labelTextClassname,
    color = 'secondary',
    label,
    error,
    ...props
  }: RadioProps,
  ref: LegacyRef<HTMLInputElement>
) => (
  <label className={cnb(styles.label, className)}>
    <input className={styles.radio} type="radio" ref={ref} {...props} />
    <span
      className={cnb(styles.customRadio, styles[color], {
        [styles.error]: error
      })}
    />
    {label && (
      <span className={cnb(styles.labelText, labelTextClassname)}>{label}</span>
    )}
  </label>
)

export default forwardRef(Radio)
