import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { API } from '~/constants/routes'
import Image from 'next/image'
import ServerErrorImage from '~/assets/images/500-error.jpg'

const ServerError = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image src={ServerErrorImage} alt="Server error" placeholder="blur" />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(API.categories)
  const { data: tags } = await $api.get(API.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default ServerError
