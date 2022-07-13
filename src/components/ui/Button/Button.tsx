import { ButtonProps } from './Button.props'
import { cnb } from 'cnbuilder'

import styles from './Button.module.scss'

const Button = ({
  children,
  className,
  variant = 'contained',
  size = 'md',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cnb(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
