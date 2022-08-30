import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'
import { useAppContext } from '~/context/AppContext/App.context'
import useSWR from 'swr'

const Cart = () => {
  const { state } = useAppContext()
  const queries = state.cart.map(cartItem => `productIds=${cartItem}`).join('&')
  const { data, error } = useSWR(`${ROUTES.cart}?${queries}`)

  if (!data) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>error</h1>
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
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
