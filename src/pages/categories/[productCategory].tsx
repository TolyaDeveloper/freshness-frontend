import { GetStaticPaths, GetStaticProps } from 'next'
import { $api } from '~/api'
import { ICategory } from '~/interfaces/category.interface'
import { ROUTES } from '~/constants/routes'
import { ProductCategoryTemplate } from '~/components/templates'
import { useRouter } from 'next/router'
import { getLastParam } from '~/utils/getLastParam'
import { findCategory } from '~/utils/findCategory'
import { ITag } from '~/interfaces/tag.interface'
import { IProduct } from '~/interfaces/product.interface'
import { FRESHNESS } from '~/constants/common'
import Head from 'next/head'
import useSWR from 'swr'

interface ProductCategoryProps {
  categories: ICategory[]
  tags: ITag[]
}

const ProductCategory = ({ categories }: ProductCategoryProps) => {
  const { asPath } = useRouter()
  const lastParameter = getLastParam(asPath)
  const category = findCategory(categories, lastParameter)
  const { data: products } = useSWR<IProduct[]>(
    `${ROUTES.products}?category=${lastParameter}`
  )

  return (
    <>
      <Head>
        <title>{`${category && category} | ${FRESHNESS}`}</title>
      </Head>
      <ProductCategoryTemplate category={category} products={products} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: categories } = await $api.get<ICategory[]>(ROUTES.categories)
  const paths = categories.map(({ _id }) => ({
    params: { productCategory: _id }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return { notFound: true }
  }

  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: tags } = await $api.get(ROUTES.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default ProductCategory
