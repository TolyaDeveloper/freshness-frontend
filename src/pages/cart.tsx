import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { API } from '~/constants/routes'
import { CartTemplate } from '~/components/templates'

const Cart = () => {
  return <CartTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(API.categories)
  const { data: tags } = await $api.get(API.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default Cart
