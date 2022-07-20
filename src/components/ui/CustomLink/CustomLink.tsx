import { cnb } from 'cnbuilder'
import { CustomLinkProps } from './CustomLink.props'
import Link from 'next/link'

import styles from './CustomLink.module.scss'

const CustomLink = ({
  children,
  className,
  endAdornment,
  underline = 'none',
  color = 'black',
  ...props
}: CustomLinkProps) => {
  return (
    <Link {...props}>
      <a
        className={cnb(
          styles.link,
          styles[`underline-${underline}`],
          styles[color],
          className
        )}
      >
        {children}
        {endAdornment && (
          <span className={styles.endAdornment}>{endAdornment}</span>
        )}
      </a>
    </Link>
  )
}

export default CustomLink
