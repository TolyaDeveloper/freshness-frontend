import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { ICategory } from '~/interfaces/category.interface'

interface HomeProps {
  categories: ICategory[]
}

const Home = ({}: HomeProps) => {
  return <>MAIN</>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get('/categories')

  return {
    props: { categories },
    revalidate: 120
  }
}

export default Home
