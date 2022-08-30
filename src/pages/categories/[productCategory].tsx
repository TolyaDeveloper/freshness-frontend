import { GetStaticPaths, GetStaticProps } from 'next'
import { $api } from '~/api'
import { ICategory } from '~/interfaces/category.interface'
import { ROUTES } from '~/constants/routes'

const ProductCategory = () => {
  return <h1>ProductCategory</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: categories } = await $api.get<ICategory[]>(ROUTES.categories)
  const paths = categories.map(category => ({
    params: { productCategory: category._id }
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
