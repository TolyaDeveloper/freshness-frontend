import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { HomeTemplate } from '~/components/templates'
import { ROUTES } from '~/constants/routes'
import { ICategory } from '~/interfaces/category.interface'
import { ICustomerReview } from '~/interfaces/customer-review.interface'
import { IBlogPost } from '~/interfaces/blog-post.interface'
import { ITag } from '~/interfaces/tag.interface'
import useSWR from 'swr'
import { IProduct } from '~/interfaces/product.interface'

interface HomeProps {
  categories: ICategory[]
  customersReviews: ICustomerReview[]
  blogPosts: IBlogPost[]
  tags: ITag[]
}

const Home = ({ blogPosts, categories, customersReviews }: HomeProps) => {
  const { data: products = [] } = useSWR<IProduct[]>(ROUTES.products)

  return (
    <>
      <HomeTemplate
        categories={categories}
        blogPosts={blogPosts}
        customersReviews={customersReviews}
        products={products}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: customersReviews } = await $api.get(ROUTES.customers_reviews)
  const { data: blogPosts } = await $api.get(`${ROUTES.blog_posts}?limit=5`)
  const { data: tags } = await $api.get(ROUTES.tags)

  return {
    props: { categories, customersReviews, blogPosts, tags },
    revalidate: 120
  }
}

export default Home
