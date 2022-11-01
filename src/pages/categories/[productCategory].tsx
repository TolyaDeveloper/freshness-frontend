import { GetServerSideProps } from 'next'
import { $api } from '~/api'
import { ICategory } from '~/interfaces/category.interface'
import { API } from '~/constants/routes'
import { ProductsWithFilters } from '~/components/organisms'
import { ProductCategoryTemplate } from '~/components/templates'
import { useRouter } from 'next/router'
import { findCategory } from '~/utils/findCategory'
import { ITag } from '~/interfaces/tag.interface'
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
  const { data: filters } = useSWRIMmutable<IFilters>(
    `${API.products}/filters/?category=${categoryId}`
  )

  return (
    <>
      <Head>
        <title>{`${category && category} | ${FRESHNESS}`}</title>
      </Head>
      <ProductCategoryTemplate
        category={category}
        productsWithFiltersView={
          <ProductsWithFilters filters={filters} category={category} />
        }
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categories } = await $api.get(API.categories)
  const { data: tags } = await $api.get(API.tags)

  return {
    props: { categories, tags }
  }
}

export default ProductCategory
