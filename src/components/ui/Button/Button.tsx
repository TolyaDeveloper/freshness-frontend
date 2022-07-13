import { ButtonProps } from './Button.props'
import { cnb } from 'cnbuilder'

import styles from './Button.module.scss'

const Button = ({
  children,
  className,
  variant = 'contained',
  size = 'md',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cnb(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </button>
  )
}

export default Button
