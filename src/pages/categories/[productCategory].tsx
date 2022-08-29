import { GetStaticProps } from 'next'
import { $api } from '~/api'

const ProductCategory = () => {
  return <h1>ProductCategory</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get('/categories')
  const { data: tags } = await $api.get('/tags')

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default ProductCategory
