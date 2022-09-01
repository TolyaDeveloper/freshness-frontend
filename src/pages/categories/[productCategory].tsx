import { GetStaticPaths, GetStaticProps } from 'next'
import { $api } from '~/api'
import { ICategory } from '~/interfaces/category.interface'
import { ROUTES } from '~/constants/routes'
import { ProductCategoryTemplate } from '~/components/templates'

const ProductCategory = () => <ProductCategoryTemplate />

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
  const { data: products } = await $api.get(
    `${ROUTES.products}?category=${params.productCategory}`
  )

  return {
    props: { categories, tags, products },
    revalidate: 120
  }
}

export default ProductCategory
