import { PropsWithChildren, useEffect } from 'react'
import { AuthService } from '~/services/auth.service'
import { LocalStorageService } from '~/services/localStorage.service'
import { useAppContext } from '~/context/AppContext/App.context'

const AuthSetter = ({ children }: PropsWithChildren) => {
  const { dispatch } = useAppContext()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await AuthService.checkAuth()

        LocalStorageService.setItem('accessToken', res.data.accessToken)
        dispatch({ type: 'SET_USER', payload: res.data.user })
      } catch (err) {
        if (err instanceof Error) {
          console.log(err)
        }
      }
    }

    if (LocalStorageService.getItem('accessToken')) {
      checkAuth()
    }
  }, [])

  return <>{children}</>
}

export default AuthSetter
