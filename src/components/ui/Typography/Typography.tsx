import { ElementType } from 'react'
import { cnb } from 'cnbuilder'
import { TypographyProps, variantsMapping } from './Typography.props'

import styles from './Typography.module.scss'

const Typography = ({
  children,
  className,
  variant,
  component,
  ...props
}: TypographyProps) => {
  const Component = component || (variantsMapping[variant] as ElementType)

  return (
    <Component
      className={cnb(styles.typography, styles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography
