import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { HomeTemplate } from '~/components/templates'
import { ROUTES } from '~/constants/routes'

const Home = () => <HomeTemplate />

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: products } = await $api.get(ROUTES.products)
  const { data: customersReviews } = await $api.get(ROUTES.customers_reviews)
  const { data: blogPosts } = await $api.get(`${ROUTES.blog_posts}?limit=5`)
  const { data: tags } = await $api.get(ROUTES.tags)

  return {
    props: { categories, products, customersReviews, blogPosts, tags },
    revalidate: 120
  }
}

export default Home
