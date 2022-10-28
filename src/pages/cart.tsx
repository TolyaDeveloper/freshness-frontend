import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'
import { useUserContext } from '~/context/UserContext/User.context'
import useSWR from 'swr'

const Cart = () => {
  return <>Cart</>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: tags } = await $api.get(ROUTES.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default Cart
