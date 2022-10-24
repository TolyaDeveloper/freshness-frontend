import { NextComponentType } from 'next'
import { Login } from '~/components/organisms'
import { useUserContext } from '~/context/UserContext/User.context'

function withAuth<T extends Record<string, unknown>>(
  Component: NextComponentType<T>
) {
  const Auth = (props: T) => {
    const { state } = useUserContext()

    if (!state.user) {
      return <Login />
    }

    return <Component {...props} />
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}

export default withAuth
