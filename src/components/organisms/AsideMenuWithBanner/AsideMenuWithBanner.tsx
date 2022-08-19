import { cnb } from 'cnbuilder'
import { AsideMenu, Banner } from '~/components/molecules'
import { useAppContext } from '~/context/AppContext/App.context'
import { AsideMenuWithBannerProps } from './AsideMenuWithBanner.props'
import { ROUTES } from '~/constants/routes'

import styles from './AsideMenuWithBanner.module.scss'

const AsideMenuWithBanner = ({ className }: AsideMenuWithBannerProps) => {
  const { state } = useAppContext()

  return (
    <div className={cnb(styles.asideMenuWithBanner, className)}>
      <AsideMenu
        categories={state.categories}
        title="Category menu"
        buttonTitle="More categories"
      />
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
