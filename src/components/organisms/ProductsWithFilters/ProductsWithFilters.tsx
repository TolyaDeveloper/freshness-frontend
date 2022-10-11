import { ProductsWithFilters } from './ProductsWithFilters.props'
import { useAppContext } from '~/context/AppContext/App.context'
import TopFilters from './TopFilters/TopFilters'
import AsideFilters from './AsideFilters/AsideFilters'
import ProductContainer from '../ProductContainer/ProductContainer'

import styles from './ProductsWithFilters.module.scss'
import {
  Arrow,
  Breadcrumbs,
  Button,
  FiltersSkeleton,
  ProductsSkeleton,
  Skeleton,
  Typography
} from '~/components/atoms'
import { Counter } from '~/components/molecules'
import CategoryHeadline from '../CategoryHeadline/CategoryHeadline'
import { useState } from 'react'

const ProductsWithFilters = ({
  filters,
  products,
  category
}: ProductsWithFilters) => {
  const { state } = useAppContext()
  const [allFilters, setAllFilters] = useState({})

  const totalProducts = filters?.filters.totalCategoryProducts[0]?.total

  const topFiltersView = filters ? (
    <TopFilters filters={filters} />
  ) : (
    <>
      <Skeleton variant="text" />
    </>
  )

  const asideFiltersView = filters ? (
    <AsideFilters filters={filters} />
  ) : (
    <FiltersSkeleton limit={4} />
  )

  const productsView = products ? (
    <ProductContainer layout={state.layout} products={products} />
  ) : (
    <ProductsSkeleton limit={3} layout={state.layout} />
  )

  return (
    <>
      <Breadcrumbs>
        <Typography level="body6">{category}</Typography>
      </Breadcrumbs>
      <CategoryHeadline
        className={styles.categoryHeadline}
        title={category}
        productsLength={totalProducts}
      />
      {topFiltersView}
      <div className={styles.productsWithFiltersWrapper}>
        {asideFiltersView}
        {productsView}
      </div>
      <div className={styles.bottomFilter}>
        <div>pagination</div>
        <Button endAdornment={<Arrow color="primary1" />}>
          Show more products
        </Button>
        <Counter title="Products" counter={totalProducts} />
      </div>
    </>
  )
}

export default ProductsWithFilters
