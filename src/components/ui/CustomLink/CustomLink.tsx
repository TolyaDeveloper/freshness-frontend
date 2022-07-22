import { cnb } from 'cnbuilder'
import { CustomLinkProps } from './CustomLink.props'

import styles from './CustomLink.module.scss'

const CustomLink = ({
  children,
  className,
  endAdornment,
  underline = 'none',
  color = 'secondary',
  level,
  ...props
}: CustomLinkProps) => {
  return (
    <a
      className={cnb(
        styles.link,
        styles[`underline-${underline}`],
        styles[color],
        styles[level],
        className
      )}
      {...props}
    >
      {children}
      {endAdornment && (
        <span className={styles.endAdornment}>{endAdornment}</span>
      )}
    </a>
  )
}

export default CustomLink
