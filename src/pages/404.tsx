import { GetStaticProps } from 'next'
import { $api } from '~/api'

const NotFound = () => {
  return (
    <div>
      <h1>Page not found!</h1>
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

export default NotFound
