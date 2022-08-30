import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'

const Blog = () => {
  return <h1>Blog</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: tags } = await $api.get(ROUTES.tags)
  const { data: blogPosts } = await $api.get(ROUTES.blog_posts)

  return {
    props: { categories, tags, blogPosts },
    revalidate: 120
  }
}

export default Blog
