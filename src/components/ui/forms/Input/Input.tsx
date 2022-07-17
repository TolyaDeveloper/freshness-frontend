import { cnb } from 'cnbuilder'
import { InputProps } from './Input.props'

import styles from './Input.module.scss'
import { useState } from 'react'

const Input = ({
  className,
  startAdornment,
  endAdornment,
  ...props
}: InputProps) => {
  const [isFocused, setFocus] = useState<boolean>(false)

  return (
    <>
      <div
        className={cnb(styles.inputWrapper, { [styles.focused]: isFocused })}
      >
        {startAdornment && (
          <span className={styles.startAdornment}>{startAdornment}</span>
        )}
        <input
          className={cnb(styles.input, className)}
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {endAdornment && (
          <span className={styles.endAdornment}>{endAdornment}</span>
        )}
      </div>
    </>
  )
}

export default Input
