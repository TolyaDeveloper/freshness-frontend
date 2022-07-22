import { forwardRef, LegacyRef } from 'react'
import { cnb } from 'cnbuilder'
import { CustomLinkProps } from './CustomLink.props'

import styles from './CustomLink.module.scss'

const CustomLink = (
  {
    children,
    className,
    endAdornment,
    underline = 'none',
    color = 'secondary',
    level = 'body1',
    ...props
  }: CustomLinkProps,
  ref: LegacyRef<HTMLAnchorElement> | undefined
) => {
  return (
    <a
      className={cnb(
        styles.link,
        styles[`underline-${underline}`],
        styles[color],
        styles[level],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      {endAdornment && (
        <span className={styles.endAdornment}>{endAdornment}</span>
      )}
    </a>
  )
}

export default forwardRef(CustomLink)
