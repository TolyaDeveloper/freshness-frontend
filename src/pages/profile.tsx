import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'
import { ProfileTemplate } from '~/components/templates'
import withAuth from '~/hocs/withAuth'

const Profile = () => {
  return (
    <>
      <ProfileTemplate />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await $api.get(ROUTES.categories)
  const { data: tags } = await $api.get(ROUTES.tags)

  return {
    props: { categories, tags },
    revalidate: 120
  }
}

export default withAuth(Profile)
