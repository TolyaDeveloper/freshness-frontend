import {
  Breadcrumbs,
  FiltersSkeleton,
  ProductsSkeleton,
  Typography
} from '~/components/atoms'
import {
  ProductContainer,
  TopFilters,
  AsideFilters,
  CategoryHeadline
} from '~/components/organisms'
import { useAppContext } from '~/context/AppContext/App.context'
import { ProductCategoryTemplateProps } from './ProductCategoryTemplate.props'

import styles from './ProductCategoryTemplate.module.scss'

const ProductCategoryTemplate = ({
  category,
  products,
  filters
}: ProductCategoryTemplateProps) => {
  const { state } = useAppContext()

  const productsView = products ? (
    <ProductContainer layout={state.layout} products={products} />
  ) : (
    <ProductsSkeleton limit={3} layout={state.layout} />
  )

  const filtersView = filters ? (
    <AsideFilters filters={filters} />
  ) : (
    <FiltersSkeleton limit={4} />
  )

  return (
    <>
      <Breadcrumbs>
        <Typography level="body6">{category}</Typography>
      </Breadcrumbs>
      <CategoryHeadline
        className={styles.categoryHeadline}
        title={category}
        productsLength={filters?.filters.totalCategoryProducts[0]?.total}
      />
      <TopFilters className={styles.topFilters} />
      <div className={styles.productsWithFiltersWrapper}>
        {filtersView}
        {productsView}
      </div>
    </>
  )
}

export default ProductCategoryTemplate
