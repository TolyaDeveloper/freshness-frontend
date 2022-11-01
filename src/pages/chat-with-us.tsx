import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { API } from '~/constants/routes'

const ChatWithUs = () => {
  return <h1>Chat with Us</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(API.categories)
  const { data: tags } = await $api.get(API.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default ChatWithUs
