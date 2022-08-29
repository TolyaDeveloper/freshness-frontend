import { IAppState, AppActions } from './App.types'

export const appReducer = (state: IAppState, action: AppActions) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'SET_TAGS':
      return { ...state, tags: action.payload }
    case 'SET_CUSTOMERS_REVIEWS':
      return { ...state, customersReviews: action.payload }
    case 'SET_BLOG_POSTS':
      return { ...state, blogPosts: action.payload }
    case 'SET_CART':
      if (Array.isArray(action.payload)) {
        return { ...state, cart: [...action.payload] }
      }

      return { ...state, cart: [...state.cart, action.payload] }
    case 'SET_LAYOUT':
      return { ...state, layout: action.payload }
    default:
      return state
  }
}
