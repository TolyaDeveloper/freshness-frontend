import { AsideMenuWithBanner } from '~/components/organisms'

import styles from './HomeTemplate.module.scss'

const HomeTemplate = () => {
  return (
    <>
      <AsideMenuWithBanner className={styles.asideMenuWithBanner} />
    </>
  )
}

export default HomeTemplate
