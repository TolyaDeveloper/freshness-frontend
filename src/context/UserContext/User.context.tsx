import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer
} from 'react'
import { type UserActions, IUserState, initialValues } from './User.types'
import { userReducer } from './User.reducer'

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

  return (
    <UserContext.Provider value={{ state: data, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
