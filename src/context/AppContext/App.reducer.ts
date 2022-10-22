import { IAppState, AppActions } from './App.types'

export const appReducer = (state: IAppState, action: AppActions) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
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
    case 'SET_WISHLIST':
      if (Array.isArray(action.payload)) {
        return { ...state, wishlist: [...action.payload] }
      }

      return { ...state, wishlist: [...state.wishlist, action.payload] }
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item !== action.payload)
      }
    case 'SET_COMPARE':
      if (Array.isArray(action.payload)) {
        return { ...state, compare: [...action.payload] }
      }

      return { ...state, compare: [...state.compare, action.payload] }
    case 'REMOVE_FROM_COMPARE':
      return {
        ...state,
        compare: state.compare.filter(item => item !== action.payload)
      }
    case 'SET_LAYOUT':
      return { ...state, layout: action.payload }
    case 'SET_USER':
      if (!action.payload) {
        return { ...state, user: null }
      }

      return { ...state, user: { ...state.user, ...action.payload } }

    default:
      return state
  }
}
