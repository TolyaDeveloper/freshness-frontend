import { FormEvent, useEffect, useState } from 'react'
import {
  Breadcrumbs,
  FiltersSkeleton,
  ProductsSkeleton,
  Skeleton,
  Typography
} from '~/components/atoms'
import { Counter, Pagination } from '~/components/molecules'
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
import { API } from '~/constants/routes'
import { IProduct } from '~/interfaces/product.interface'
import useSWR from 'swr'

import styles from './ProductsWithFilters.module.scss'

const ProductsWithFilters = ({ filters, category }: ProductsWithFilters) => {
  const { state } = useAppContext()
  const { query, push } = useRouter()
  const [shouldFetch, setFetch] = useState(false)
  const [activeFilters, setActiveFilters] = useState<IQueries>(defaultQueries)
  const [products, setProducts] = useState<IProduct[] | undefined>(undefined)
  const totalProducts = filters?.filters.totalCategoryProducts[0]?.total
  const activePage = +activeFilters.page[0] || 1
  const skipInterval = 9

  const buildQueryURI = () => {
    return `${API.products}?category=${
      query.productCategory
    }&${parseQueriesIntoString(activeFilters)}`
  }

  const { data } = useSWR<IProduct[] | undefined>(
    shouldFetch ? buildQueryURI() : null
  )

  useEffect(() => {
    if (data) {
      setProducts(data)
      setFetch(false)
    }
  }, [data])

  useEffect(() => {
    setActiveFilters({
      ...defaultQueries,
      ...parseQueries(query, 'productCategory')
    })

    setFetch(true)
  }, [query])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    push({
      query: { productCategory: query.productCategory, ...activeFilters }
    })
  }

  const handleReset = () => {
    setActiveFilters(defaultQueries)

    push({ query: { productCategory: query.productCategory } })
  }

  const handlePagination = (index: number) => {
    push({
      query: {
        productCategory: query.productCategory,
        ...activeFilters,
        page: index + 1
      }
    })
  }

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
        <Pagination
          onHandlePagination={handlePagination}
          count={totalProducts && Math.ceil(totalProducts / skipInterval)}
          activePage={activePage}
        />
        {/* !todo */}
        {/* <Button endAdornment={<Arrow color="primary1" orientation="down" />}>
          Show more products
        </Button> */}
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
