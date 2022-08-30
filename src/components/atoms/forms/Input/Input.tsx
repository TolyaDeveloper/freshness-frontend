import { forwardRef, LegacyRef } from 'react'
import { cnb } from 'cnbuilder'
import { InputProps } from './Input.props'

import styles from './Input.module.scss'

const Input = (
  { className, startAdornment, endAdornment, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <>
      <div className={cnb(styles.inputWrapper, className)}>
        {startAdornment && (
          <span className={styles.startAdornment}>{startAdornment}</span>
        )}
        <input className={styles.input} ref={ref} {...props} />
        {endAdornment && (
          <span className={styles.endAdornment}>{endAdornment}</span>
        )}
      </div>
    </>
  )
}

export default forwardRef(Input)
