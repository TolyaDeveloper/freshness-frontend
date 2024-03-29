import { IAppState, AppActions } from './App.types'

export const appReducer = (state: IAppState, action: AppActions) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'SET_TAGS':
      return { ...state, tags: action.payload }
    case 'SET_LAYOUT':
      return { ...state, layout: action.payload }
    default:
      return state
  }
}
