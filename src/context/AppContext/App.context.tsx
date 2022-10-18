import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { appReducer } from './App.reducer'
import { IAppState, AppActions, initialValues } from './App.types'
import { LocalStorageService } from '~/services/localStorage.service'

export const AppContext = createContext<{
  state: IAppState
  dispatch: Dispatch<AppActions>
}>({
  state: initialValues,
  dispatch: () => null
})

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [data, dispatch] = useReducer(appReducer, initialValues)

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

  return (
    <AppContext.Provider value={{ state: data, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
