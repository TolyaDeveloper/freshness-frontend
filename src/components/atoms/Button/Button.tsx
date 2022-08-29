import { AnchorHTMLAttributes, forwardRef } from 'react'
import { cnb } from 'cnbuilder'
import { ButtonProps } from './Button.props'

import styles from './Button.module.scss'

const Button = (
  {
    children,
    className,
    variant = 'solid',
    size = 'md',
    startAdornment,
    endAdornment,
    href,
    ...props
  }: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>,
  ref: any
) => {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      className={cnb(styles.button, styles[variant], styles[size], className)}
      href={href}
      ref={ref}
      {...props}
    >
      {startAdornment && (
        <span className={styles.startAdornment}>{startAdornment}</span>
      )}
      {children}
      {endAdornment && (
        <span className={styles.endAdornment}>{endAdornment}</span>
      )}
    </Component>
  )
}

export default forwardRef(Button)
