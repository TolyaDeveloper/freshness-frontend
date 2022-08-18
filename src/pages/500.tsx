import { GetStaticProps } from 'next'
import { $api } from '~/api'

const ServerError = () => {
  return (
    <div>
      <h1>Server error!</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get('/categories')

  return {
    props: { categories },
    revalidate: 120
  }
}

export default ServerError
