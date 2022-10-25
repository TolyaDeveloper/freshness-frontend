import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer
} from 'react'
import { type UserActions, IUserState, initialValues } from './User.types'
import { userReducer } from './User.reducer'
import { AuthService } from '~/services/auth.service'

export const UserContext = createContext<{
  state: IUserState
  dispatch: Dispatch<UserActions>
}>({
  state: initialValues,
  dispatch: () => null
})

export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [data, dispatch] = useReducer(userReducer, initialValues)

  // const login = async (credentials: { email: string; password: string }) => {
  //   dispatch({ type: 'SET_USER_LOADING', payload: true })

  //   const result = await AuthService.login(credentials)

  //   localStorage.setItem('accessToken', result.data.accessToken)

  //   dispatch({ type: 'SET_USER', payload: result.data.user })
  // }

  return (
    <UserContext.Provider value={{ state: data, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
