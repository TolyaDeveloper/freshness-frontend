import { FormEvent, useEffect, useState } from 'react'
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
import {
  TopFilters,
  AsideFilters,
  ProductContainer,
  CategoryHeadline
} from '~/components/organisms'
import { ProductsWithFilters } from './ProductsWithFilters.props'
import { useAppContext } from '~/context/AppContext/App.context'
import { useRouter } from 'next/router'
import { parseQueries, parseQueriesIntoString } from '~/utils/queries'
import { IQueries } from '~/interfaces/queries.interface'
import { ParsedUrlQuery } from 'querystring'

import styles from './ProductsWithFilters.module.scss'

const ProductsWithFilters = ({
  filters,
  products,
  category
}: ProductsWithFilters) => {
  const { state } = useAppContext()
  const { query, push } = useRouter()
  const [activeFilters, setActiveFilters] = useState<IQueries>({})
  const queryURI = parseQueriesIntoString(activeFilters as ParsedUrlQuery)

  console.log(activeFilters)

  useEffect(() => {
    setActiveFilters(parseQueries(query, 'productCategory'))
  }, [query])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    push({
      query: { productCategory: query.productCategory, ...activeFilters }
    })
  }

  const handleReset = () => {
    setActiveFilters({})

    push({ query: { productCategory: query.productCategory } })
  }

  const totalProducts = filters?.filters.totalCategoryProducts[0]?.total

  const topFiltersView = filters ? (
    <TopFilters
      filters={filters}
      activeFilters={activeFilters}
      setActiveFilters={setActiveFilters}
    />
  ) : (
    <>
      <Skeleton variant="rounded" height="40px" />
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
      <form autoComplete="off" onSubmit={handleSubmit} onReset={handleReset}>
        {topFiltersView}
        <div className={styles.productsWithFiltersWrapper}>
          {asideFiltersView}
          {productsView}
        </div>
      </form>
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
