import { memo } from 'react'
import { cnb } from 'cnbuilder'
import { footerLinks } from '~/constants/common'
import { CustomLink } from '~/components/atoms'
import { AsideMenu } from '~/components/molecules'
import { FooterLinksProps } from './FooterLinks.props'
import Link from 'next/link'

import styles from './FooterLinks.module.scss'

const FooterLinks = ({ className }: FooterLinksProps) => {
  const renderedLinks = footerLinks.map(({ links, title }) => (
    <AsideMenu key={title} title={title}>
      {links.map(({ href, id, value }) => (
        <Link key={id} href={href} passHref>
          <CustomLink level="body2" underline="hover">
            {value}
          </CustomLink>
        </Link>
      ))}
    </AsideMenu>
  ))

  return (
    <div className={cnb(styles.linksContainer, className)}>{renderedLinks}</div>
  )
}

export default memo(FooterLinks)
