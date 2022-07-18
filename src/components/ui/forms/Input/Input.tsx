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
      <div className={cnb(styles.inputWrapper, className)}>
        {startAdornment && (
          <span className={styles.startAdornment}>{startAdornment}</span>
        )}
        <input className={styles.input} {...props} />
        {endAdornment && (
          <span className={styles.endAdornment}>{endAdornment}</span>
        )}
      </div>
    </>
  )
}

export default Input
