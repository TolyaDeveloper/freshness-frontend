import { memo } from 'react'
import { cnb } from 'cnbuilder'
import { footerLinks } from '~/constants/common'
import { Typography, CustomLink } from '~/components/atoms'
import { FooterLinksProps } from './FooterLinks.props'
import Link from 'next/link'

import styles from './FooterLinks.module.scss'

const FooterLinks = ({ className }: FooterLinksProps) => {
  const renderedLinks = footerLinks.map(({ links, title }) => (
    <div key={title}>
      <Typography className={styles.title} level="h2-md">
        {title}
      </Typography>
      <ul>
        {links.map(({ href, id, value }) => (
          <li className={styles.listItem} key={id}>
            <Link href={href} passHref>
              <CustomLink level="body2" underline="hover">
                {value}
              </CustomLink>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div className={cnb(styles.linksContainer, className)}>{renderedLinks}</div>
  )
}

export default memo(FooterLinks)
