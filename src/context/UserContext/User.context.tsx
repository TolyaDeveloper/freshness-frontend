import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { type UserActions, IUserState, initialValues } from './User.types'
import { userReducer } from './User.reducer'
import { LocalStorageService } from '~/services/localStorage.service'
import { LOCAL_STORAGE_KEYS } from '~/constants/common'

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

  useEffect(() => {
    const cartFromLocalStorage = LocalStorageService.getItem(
      LOCAL_STORAGE_KEYS.cart
    )
    const wishlistFromLocalStorage = LocalStorageService.getItem(
      LOCAL_STORAGE_KEYS.wishlist
    )
    const compareFromLocalStorage = LocalStorageService.getItem(
      LOCAL_STORAGE_KEYS.compare
    )

    cartFromLocalStorage &&
      dispatch({
        type: 'SET_CART',
        payload: cartFromLocalStorage
      })

    wishlistFromLocalStorage &&
      dispatch({
        type: 'SET_WISHLIST',
        payload: wishlistFromLocalStorage
      })

    compareFromLocalStorage &&
      dispatch({
        type: 'SET_COMPARE',
        payload: compareFromLocalStorage
      })
  }, [])

  useEffect(() => {
    if (data.shouldSyncToLocalStorage) {
      LocalStorageService.setItem(
        LOCAL_STORAGE_KEYS.wishlist,
        data.user.wishlist
      )
      LocalStorageService.setItem(LOCAL_STORAGE_KEYS.compare, data.user.compare)
      LocalStorageService.setItem(LOCAL_STORAGE_KEYS.cart, data.user.cart)
    }

    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: false })
  }, [data.shouldSyncToLocalStorage, data.user])

  return (
    <UserContext.Provider value={{ state: data, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
