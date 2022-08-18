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

  return {
    props: { categories },
    revalidate: 120
  }
}

export default Home
