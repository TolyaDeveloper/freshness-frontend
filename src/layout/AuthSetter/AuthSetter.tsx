import { PropsWithChildren, useEffect } from 'react'
import { AuthService } from '~/services/auth.service'
import { LocalStorageService } from '~/services/localStorage.service'
import { useUserContext } from '~/context/UserContext/User.context'
import { LOCAL_STORAGE_KEYS } from '~/constants/common'

const AuthSetter = ({ children }: PropsWithChildren) => {
  const { dispatch } = useUserContext()

  const checkAuth = async () => {
    try {
      const { data } = await AuthService.checkAuth()

      LocalStorageService.setItem(
        LOCAL_STORAGE_KEYS.accessToken,
        data.accessToken
      )

      dispatch({ type: 'SET_USER', payload: data.user })
      dispatch({ type: 'SET_AUTH', payload: true })
    } catch (err) {
      dispatch({ type: 'SET_AUTH', payload: false })

      if (err instanceof Error) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    if (LocalStorageService.getItem(LOCAL_STORAGE_KEYS.accessToken)) {
      checkAuth()
    }
  }, [])

  return <>{children}</>
}

export default AuthSetter
