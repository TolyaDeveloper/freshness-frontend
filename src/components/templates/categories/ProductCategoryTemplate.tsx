import { Breadcrumbs, Typography } from '~/components/atoms'
import { Counter, LayoutChecker } from '~/components/molecules'
import {
  ProductContainer,
  TopFilters,
  AsideFilters
} from '~/components/organisms'
import { useAppContext } from '~/context/AppContext/App.context'
import { ProductCategoryTemplateProps } from './ProductCategoryTemplate.props'

import styles from './ProductCategoryTemplate.module.scss'

const ProductCategoryTemplate = ({
  category,
  products
}: ProductCategoryTemplateProps) => {
  const { state } = useAppContext()

  return (
    <>
      <Breadcrumbs>
        <Typography level="body6">{category}</Typography>
      </Breadcrumbs>
      <div className={styles.prePage}>
        <Typography level="h1">{category}</Typography>
        <LayoutChecker layout={state.layout} />
        <Counter title="Products" counter={products.length} />
      </div>
      <TopFilters />
      <div className={styles.productsWithFiltersWrapper}>
        {/* <AsideFilters /> */}
        <ProductContainer layout={state.layout} products={products} />
      </div>
    </>
  )
}

export default ProductCategoryTemplate
