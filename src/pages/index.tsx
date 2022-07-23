import { Layout } from '~/layout'
import { Search, TopBar, UserWithCart } from '~/components/molecules'

const Home = () => {
  return (
    <Layout>
      MAIN <TopBar />
      <UserWithCart />
    </Layout>
  )
}

export default Home
