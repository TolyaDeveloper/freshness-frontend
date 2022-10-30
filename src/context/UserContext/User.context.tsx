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
    const productsFromLocalStorage = LocalStorageService.getItem('products')
    const wishlistFromLocalStorage = LocalStorageService.getItem('wishlist')
    const compareFromLocalStorage = LocalStorageService.getItem('compare')

    productsFromLocalStorage &&
      dispatch({
        type: 'SET_CART',
        payload: productsFromLocalStorage
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
      LocalStorageService.setItem('wishlist', data.user.wishlist)
      LocalStorageService.setItem('compare', data.user.compare)
      LocalStorageService.setItem('cart', data.user.cart)
    }

    dispatch({ type: 'SHOULD_SYNC_TO_LOCAL_STORAGE', payload: false })
  }, [data.shouldSyncToLocalStorage, data.user])

  return (
    <UserContext.Provider value={{ state: data, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
