import { cnb } from 'cnbuilder'
import { CustomLinkProps } from './CustomLink.props'
import Link from 'next/link'

import styles from './CustomLink.module.scss'

const CustomLink = ({ children, className, ...props }: CustomLinkProps) => {
  return (
    <Link {...props}>
      <a className={cnb(styles.link, className)}>{children}</a>
    </Link>
  )
}

export default CustomLink
