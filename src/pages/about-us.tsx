import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { API } from '~/constants/routes'

const AboutUs = () => {
  return <h1>About Us</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(API.categories)
  const { data: tags } = await $api.get(API.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default AboutUs
