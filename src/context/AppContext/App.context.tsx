import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer
} from 'react'
import { appReducer } from './App.reducer'
import { IAppState, AppActions, initialValues } from './App.types'

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

  return (
    <AppContext.Provider value={{ state: data, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
