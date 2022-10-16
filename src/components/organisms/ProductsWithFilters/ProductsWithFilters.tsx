import { FormEvent, useEffect, useState } from 'react'
import {
  Arrow,
  Breadcrumbs,
  Button,
  Checkbox,
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
import {
  parseQueries,
  parseQueriesIntoString,
  defaultQueries
} from '~/utils/queries'
import { IQueries } from '~/interfaces/queries.interface'
import { ROUTES } from '~/constants/routes'
import { IProduct } from '~/interfaces/product.interface'
import useSWR from 'swr'

import styles from './ProductsWithFilters.module.scss'

const ProductsWithFilters = ({
  filters,
  products,
  category
}: ProductsWithFilters) => {
  const { state } = useAppContext()
  const { query, push } = useRouter()
  const [shouldFetch, setFetch] = useState(false)
  const [activeFilters, setActiveFilters] = useState<IQueries>(defaultQueries)
  const [activeProducts, setActiveProducts] = useState<IProduct[] | undefined>(
    products
  )

  const buildQueryURI = () => {
    return `${ROUTES.products}?category=${
      query.productCategory
    }&${parseQueriesIntoString(activeFilters)}`
  }

  const {} = useSWR(shouldFetch ? buildQueryURI() : null, {
    onSuccess: (data: IProduct[]) => {
      setFetch(false)
      setActiveProducts(data)
    }
  })

  console.log(activeFilters)

  useEffect(() => {
    setActiveFilters({
      ...activeFilters,
      ...parseQueries(query, 'productCategory')
    })
  }, [])

  useEffect(() => {
    setActiveProducts(products)
  }, [products])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    push({
      query: { productCategory: query.productCategory, ...activeFilters }
    })

    setFetch(true)
  }

  const handleReset = () => {
    setActiveFilters(defaultQueries)

    push({ query: { productCategory: query.productCategory } })

    setFetch(true)
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
    <AsideFilters
      filters={filters}
      activeFilters={activeFilters}
      setActiveFilters={setActiveFilters}
    />
  ) : (
    <FiltersSkeleton limit={4} />
  )

  const productsView = activeProducts ? (
    <ProductContainer layout={state.layout} products={activeProducts} />
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
        <Button endAdornment={<Arrow color="primary1" orientation="down" />}>
          Show more products
        </Button>
        <Counter
          className={styles.counter}
          title="Products"
          counter={totalProducts}
        />
      </div>
    </>
  )
}

export default ProductsWithFilters
