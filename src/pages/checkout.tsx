import { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { $api } from '~/api'
import { API } from '~/constants/routes'
import { CheckoutTemplate } from '~/components/templates'
import CheckoutLayout from '~/layout/CheckoutLayout/CheckoutLayout'

const Checkout = () => {
  return <CheckoutTemplate />
}

Checkout.getLayout = (page: ReactElement) => {
  return <CheckoutLayout {...page.props}>{page}</CheckoutLayout>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(API.categories)

  return {
    props: { categories },
    revalidate: 120
  }
}

export default Checkout
