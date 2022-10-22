import { NextComponentType } from 'next'
import { useAppContext } from '~/context/AppContext/App.context'
import { Login } from '~/components/organisms'

function withAuth<T extends Record<string, unknown>>(
  Component: NextComponentType<T>
) {
  const Auth = (props: T) => {
    const { state } = useAppContext()

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
