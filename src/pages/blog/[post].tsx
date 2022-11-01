import { GetStaticPaths, GetStaticProps } from 'next'
import { $api } from '~/api'
import { API } from '~/constants/routes'
import { IBlogPost } from '~/interfaces/blog-post.interface'

const Post = () => {
  return <h1>Post</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await $api.get<IBlogPost[]>(API.blogPosts)
  const paths = posts.map(({ _id }) => ({
    params: { post: _id }
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

  const { data: categories } = await $api.get(API.categories)
  const { data: tags } = await $api.get(API.tags)
  const { data: post } = await $api.get(`${API.blogPosts}/${params.post}`)

  return {
    props: { categories, tags, blogPosts: [post] },
    revalidate: 120
  }
}

export default Post
