import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import { Layout } from '~/layout'
import { $api } from '~/api'
import { ICategory } from '~/interfaces/category.interface'

interface HomeProps {
  categories: ICategory[]
}

const Home = ({}: HomeProps) => {
  return <></>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get('/categories')

  return {
    props: { categories },
    revalidate: 120
  }
}

export default Home
