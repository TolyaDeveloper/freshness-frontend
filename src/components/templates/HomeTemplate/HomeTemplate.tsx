import { Arrow, Button, Typography } from '~/components/atoms'
import {
  AsideMenu,
  ProductContainer,
  PreSectionWrapper
} from '~/components/molecules'
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
            buttonTitle="More categories"
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
      <PreSectionWrapper
        className={styles.preSectionWrapper}
        heading={<Typography level="h2-md">Section Headline</Typography>}
        button={
          <Button variant="plain" endAdornment={<Arrow />}>
            Button
          </Button>
        }
      />
      <ProductContainer layout="grid" products={state.products} />
    </>
  )
}

export default HomeTemplate
