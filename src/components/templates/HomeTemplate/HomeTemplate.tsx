import { AsideMenu, ProductContainer } from '~/components/molecules'
import {
  AsideMenuWithBanner,
  AsideMenuWithProducts
} from '~/components/organisms'
import { useAppContext } from '~/context/AppContext/App.context'

import styles from './HomeTemplate.module.scss'

const HomeTemplate = () => {
  const { state } = useAppContext()

  return (
    <>
      <AsideMenuWithBanner
        className={styles.asideMenuWithBanner}
        asideMenu={
          <AsideMenu
            title="Best from farmers"
            buttonTitle="More products"
            categories={state.categories}
          />
        }
      />
      <AsideMenuWithProducts
        className={styles.asideMenuWithProducts}
        asideMenu={
          <AsideMenu
            title="Best selling products"
            buttonTitle="More products"
            categories={state.categories}
          />
        }
        products={<ProductContainer layout="grid" products={state.products} />}
      />
      <AsideMenuWithProducts
        className={styles.asideMenuWithProducts}
        asideMenu={
          <AsideMenu
            title="Best from farmers"
            buttonTitle="More products"
            categories={state.categories}
          />
        }
        products={<ProductContainer layout="grid" products={state.products} />}
      />
    </>
  )
}

export default HomeTemplate
