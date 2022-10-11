import { GetServerSideProps } from 'next'
import { $api } from '~/api'
import { ICategory } from '~/interfaces/category.interface'
import { ROUTES } from '~/constants/routes'
import { ProductsWithFilters } from '~/components/organisms'
import { ProductCategoryTemplate } from '~/components/templates'
import { useRouter } from 'next/router'
import { findCategory } from '~/utils/findCategory'
import { ITag } from '~/interfaces/tag.interface'
import { IProduct } from '~/interfaces/product.interface'
import { FRESHNESS } from '~/constants/common'
import { IFilters } from '~/interfaces/filters.interface'
import Head from 'next/head'
import useSWRIMmutable from 'swr/immutable'

interface ProductCategoryProps {
  categories: ICategory[]
  tags: ITag[]
}

const ProductCategory = ({ categories }: ProductCategoryProps) => {
  const { query } = useRouter()
  const categoryId = query.productCategory as string
  const category = findCategory(categories, categoryId)
  const { data: products } = useSWRIMmutable<IProduct[]>(
    `${ROUTES.products}?category=${categoryId}`
  )
  const { data: filters } = useSWRIMmutable<IFilters>(
    `${ROUTES.products}/filters/?category=${categoryId}`
  )

  return (
    <>
      <Head>
        <title>{`${category && category} | ${FRESHNESS}`}</title>
      </Head>
      <ProductCategoryTemplate
        category={category}
        productsWithFiltersView={
          <ProductsWithFilters
            products={products}
            filters={filters}
            category={category}
          />
        }
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: tags } = await $api.get(ROUTES.tags)

  return {
    props: { categories, tags }
  }
}

export default ProductCategory
