import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { HomeTemplate } from '~/components/templates'
import { API } from '~/constants/routes'
import { ICategory } from '~/interfaces/category.interface'
import { ICustomerReview } from '~/interfaces/customer-review.interface'
import { IBlogPost } from '~/interfaces/blog-post.interface'
import { ITag } from '~/interfaces/tag.interface'
import { IProduct } from '~/interfaces/product.interface'
import useSWR from 'swr'

interface HomeProps {
  categories: ICategory[]
  customersReviews: ICustomerReview[]
  blogPosts: IBlogPost[]
  tags: ITag[]
}

const Home = ({ blogPosts, categories, customersReviews }: HomeProps) => {
  const { data: products } = useSWR<IProduct[]>(API.products)

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
  const { data: categories } = await $api.get(API.categories)
  const { data: customersReviews } = await $api.get(API.customerReviews)
  const { data: blogPosts } = await $api.get(`${API.blogPosts}?limit=5`)
  const { data: tags } = await $api.get(API.tags)

  return {
    props: { categories, customersReviews, blogPosts, tags },
    revalidate: 20
  }
}

export default Home
