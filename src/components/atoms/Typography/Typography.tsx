import { ElementType } from 'react'
import { cnb } from 'cnbuilder'
import { TypographyProps, variantsMapping } from './Typography.props'

import styles from './Typography.module.scss'

const Typography = ({
  children,
  className,
  level,
  component,
  color = 'primary4',
  ...props
}: TypographyProps) => {
  const Component = component || (variantsMapping[level] as ElementType)

  return (
    <Component
      className={cnb(
        styles.typography,
        styles[color],
        styles[level],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography
