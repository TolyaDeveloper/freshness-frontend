import { useRouter } from 'next/router'
import { Breadcrumbs, Typography } from '~/components/atoms'
import { Counter, LayoutChecker } from '~/components/molecules'
import { ProductContainer } from '~/components/organisms'
import { useAppContext } from '~/context/AppContext/App.context'
import { findCategory } from '~/utils/findCategory'
import { getLastParam } from '~/utils/getLastParam'

import styles from './ProductCategoryTemplate.module.scss'

const ProductCategoryTemplate = () => {
  const { state } = useAppContext()
  const { asPath } = useRouter()
  const category = findCategory(state.categories, getLastParam(asPath))

  return (
    <>
      <Breadcrumbs>
        <Typography level="body6">{category}</Typography>
      </Breadcrumbs>
      <div className={styles.prePage}>
        <Typography level="h1">{category}</Typography>
        <LayoutChecker layout={state.layout} />
        <Counter title="Products" counter={state.products.length} />
      </div>

      <ProductContainer layout={state.layout} products={state.products} />
    </>
  )
}

export default ProductCategoryTemplate
