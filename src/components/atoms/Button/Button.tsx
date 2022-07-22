import { cnb } from 'cnbuilder'
import { ButtonProps } from './Button.props'

import styles from './Button.module.scss'

const Button = ({
  children,
  className,
  variant = 'solid',
  size = 'md',
  startAdornment,
  endAdornment,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cnb(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {startAdornment && (
        <span className={styles.startIcon}>{startAdornment}</span>
      )}
      {children}
      {endAdornment && <span className={styles.endIcon}>{endAdornment}</span>}
    </button>
  )
}

export default Button