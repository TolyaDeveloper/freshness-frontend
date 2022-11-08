import { memo } from 'react'
import { cnb } from 'cnbuilder'
import { CustomLink } from '~/components/atoms'
import { PAGES } from '~/constants/routes'
import { TOP_BAR } from '~/constants/common'
import { TopBarProps } from './TopBar.props'
import Link from 'next/link'

import styles from './TopBar.module.scss'

const TopBar = ({ className }: TopBarProps) => (
  <div className={cnb(styles.topBar, className)}>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href={PAGES.chatWithUs} passHref>
          <CustomLink>{TOP_BAR.CHAT}</CustomLink>
        </Link>
      </li>
      <li className={styles.listItem}>
        <CustomLink
          color="primary2"
          href={`tel:${TOP_BAR.PHONE.replaceAll(' ', '')}`}
        >
          {TOP_BAR.PHONE}
        </CustomLink>
      </li>
      <li className={cnb(styles.listItem, styles.email)}>
        <CustomLink color="primary2" href={`mailto:${TOP_BAR.EMAIL}`}>
          {TOP_BAR.EMAIL}
        </CustomLink>
      </li>
    </ul>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href={PAGES.blog} passHref>
          <CustomLink>{TOP_BAR.BLOG}</CustomLink>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href={PAGES.aboutUs} passHref>
          <CustomLink>{TOP_BAR.ABOUT}</CustomLink>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href={PAGES.careers} passHref>
          <CustomLink>{TOP_BAR.CAREERS}</CustomLink>
        </Link>
      </li>
    </ul>
  </div>
)

export default memo(TopBar)
