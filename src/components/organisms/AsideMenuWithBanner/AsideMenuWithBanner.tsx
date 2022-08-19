import { cnb } from 'cnbuilder'
import { Banner } from '~/components/molecules'
import { AsideMenuWithBannerProps } from './AsideMenuWithBanner.props'
import { ROUTES } from '~/constants/routes'

import styles from './AsideMenuWithBanner.module.scss'

const AsideMenuWithBanner = ({
  className,
  asideMenu
}: AsideMenuWithBannerProps) => {
  return (
    <div className={cnb(styles.asideMenuWithBanner, className)}>
      {asideMenu}
      <Banner
        href={ROUTES.blog}
        title="Space for heading"
        subfocus="Banner subfocus"
        linkTitle="Read recepies"
      />
      <Banner
        href={ROUTES.blog}
        title="Space for heading"
        subfocus="Banner subfocus"
        linkTitle="Read recepies"
      />
    </div>
  )
}

export default AsideMenuWithBanner
