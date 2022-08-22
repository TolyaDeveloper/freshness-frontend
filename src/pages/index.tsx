import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { HomeTemplate } from '~/components/templates'

const Home = () => {
  return (
    <>
      <HomeTemplate />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get('/categories')
  const { data: products } = await $api.get('/products')

  return {
    props: { categories, products },
    revalidate: 120
  }
}

export default Home
