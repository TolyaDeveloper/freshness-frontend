import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { API } from '~/constants/routes'

const Blog = () => {
  return <h1>Blog</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(API.categories)
  const { data: tags } = await $api.get(API.tags)
  const { data: blogPosts } = await $api.get(API.blogPosts)

  return {
    props: { categories, tags, blogPosts },
    revalidate: 120
  }
}

export default Blog
