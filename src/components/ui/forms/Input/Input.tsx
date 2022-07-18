import { cnb } from 'cnbuilder'
import { InputProps } from './Input.props'

import styles from './Input.module.scss'

const Input = ({
  className,
  startAdornment,
  endAdornment,
  ...props
}: InputProps) => {
  return (
    <>
      <div className={cnb(styles.inputWrapper)}>
        {startAdornment && (
          <span className={styles.startAdornment}>{startAdornment}</span>
        )}
        <input className={cnb(styles.input, className)} {...props} />
        <span className={styles.focused} />
        {endAdornment && (
          <span className={styles.endAdornment}>{endAdornment}</span>
        )}
      </div>
    </>
  )
}

export default Input
