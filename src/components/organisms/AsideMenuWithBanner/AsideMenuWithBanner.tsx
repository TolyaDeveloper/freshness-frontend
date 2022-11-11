import { cnb } from 'cnbuilder'
import { Banner } from '~/components/molecules'
import { AsideMenuWithBannerProps } from './AsideMenuWithBanner.props'
import { PAGES } from '~/constants/routes'

import styles from './AsideMenuWithBanner.module.scss'

const AsideMenuWithBanner = ({
  className,
  asideMenu
}: AsideMenuWithBannerProps) => (
  <div className={cnb(styles.asideMenuWithBanner, className)}>
    {asideMenu}
    <Banner
      className={styles.banner}
      href={PAGES.blog}
      title="Space for heading"
      subfocus="Banner subfocus"
      linkTitle="Read recepies"
    />
    <Banner
      className={styles.banner}
      href={PAGES.blog}
      title="Space for heading"
      subfocus="Banner subfocus"
      linkTitle="Read recepies"
    />
  </div>
)

export default AsideMenuWithBanner
