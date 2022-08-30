import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'

const Profile = () => {
  return <h1>Profile</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: tags } = await $api.get(ROUTES.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default Profile
