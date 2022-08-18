import { cnb } from 'cnbuilder'
import { AsideMenu, Banner } from '~/components/molecules'
import { useAppContext } from '~/context/AppContext/App.context'
import { AsideMenuWithBannerProps } from './AsideMenuWithBanner.props'

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
        href="/"
        title="Space for heading"
        subfocus="Banner subfocus"
        linkTitle="Read recepies"
      />
      <Banner
        href="/"
        title="Space for heading"
        subfocus="Banner subfocus"
        linkTitle="Read recepies"
      />
    </div>
  )
}

export default AsideMenuWithBanner
