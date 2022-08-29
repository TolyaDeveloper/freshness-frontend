import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'
import Image from 'next/image'
import NotFoundImage from '~/assets/images/404-error.jpg'

const NotFound = () => {
  return <Image src={NotFoundImage} alt="Not found" placeholder="blur" />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: tags } = await $api.get(ROUTES.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default NotFound
