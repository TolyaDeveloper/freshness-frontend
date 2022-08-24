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
  const { data: customersReviews } = await $api.get('/customers-reviews')
  const { data: blogPosts } = await $api.get('/blog-posts')
  // const { data: tags } = await $api.get('/tags')

  return {
    props: { categories, products, customersReviews, blogPosts },
    revalidate: 120
  }
}

export default Home
