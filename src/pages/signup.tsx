import { GetStaticProps } from 'next'
import { $api } from '~/api'
import { API, PAGES } from '~/constants/routes'
import { SignupTemplate } from '~/components/templates'
import { useRouter } from 'next/router'
import { useUserContext } from '~/context/UserContext/User.context'

const Signup = () => {
  const { state } = useUserContext()
  const { push } = useRouter()

  if (state.isAuthenticated) {
    push(PAGES.profile)
  }

  return (
    <>
      <SignupTemplate />
    </>
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

export default Signup
