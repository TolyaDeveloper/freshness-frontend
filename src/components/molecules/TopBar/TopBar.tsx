import { cnb } from 'cnbuilder'
import { CustomLink } from '~/components/atoms'
import { ROUTES } from '~/constants/routes'
import { TOP_BAR } from '~/constants/molecules/topBar'
import { TopBarProps } from './TopBar.props'
import Link from 'next/link'

import styles from './TopBar.module.scss'

const TopBar = ({ className, ...props }: TopBarProps) => {
  return (
    <div className={cnb(styles.topBar, className)} {...props}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href={ROUTES.chat} passHref>
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
        <li className={styles.listItem}>
          <CustomLink color="primary2" href={`mailto:${TOP_BAR.EMAIL}`}>
            {TOP_BAR.EMAIL}
          </CustomLink>
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href={ROUTES.blog} passHref>
            <CustomLink>{TOP_BAR.BLOG}</CustomLink>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={ROUTES.about} passHref>
            <CustomLink>{TOP_BAR.ABOUT}</CustomLink>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={ROUTES.careers} passHref>
            <CustomLink>{TOP_BAR.CAREERS}</CustomLink>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TopBar
