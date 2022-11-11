import { forwardRef, LegacyRef } from 'react'
import { cnb } from 'cnbuilder'
import { InputProps } from './Input.props'
import Typography from '../../Typography/Typography'

import styles from './Input.module.scss'

const Input = (
  { className, startAdornment, endAdornment, error, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) => (
  <div className={cnb(styles.inputWrapper, className)}>
    {startAdornment && (
      <span className={styles.startAdornment}>{startAdornment}</span>
    )}
    <input
      className={styles.input}
      ref={ref}
      aria-invalid={error ? true : false}
      {...props}
    />
    {endAdornment && (
      <span className={styles.endAdornment}>{endAdornment}</span>
    )}
    {error && (
      <Typography
        level="body6"
        component="span"
        className={styles.error}
        role="alert"
      >
        {error.message}
      </Typography>
    )}
  </div>
)

export default forwardRef(Input)
