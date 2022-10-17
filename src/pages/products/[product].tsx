import { GetStaticPaths, GetStaticProps } from 'next'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'
import { IProduct } from '~/interfaces/product.interface'

const Product = () => {
  return <h1>Product</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: products } = await $api.get<IProduct[]>(ROUTES.products)
  const paths = products.map(({ _id }) => ({
    params: { product: _id }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true
    }
  }

  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: tags } = await $api.get(ROUTES.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default Product
