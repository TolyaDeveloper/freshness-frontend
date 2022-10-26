import { IUserState, UserActions } from './User.types'

export const userReducer = (state: IUserState, action: UserActions) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_USER_LOADING':
      return { ...state, isUserLoading: action.payload }
    case 'SET_AUTH':
      return { ...state, isAuthenticated: action.payload }
    case 'SET_CART':
      if (Array.isArray(action.payload)) {
        return { ...state, user: { ...state.user, cart: action.payload } }
      }

      return {
        ...state,
        user: { ...state.user, cart: [...state.user.cart, action.payload] }
      }
    case 'SET_WISHLIST':
      if (Array.isArray(action.payload)) {
        return { ...state, user: { ...state.user, wishlist: action.payload } }
      }

      return {
        ...state,
        user: {
          ...state.user,
          wishlist: [...state.user.wishlist, action.payload]
        }
      }
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        user: {
          ...state.user,
          wishlist: state.user.wishlist.filter(item => item !== action.payload)
        }
      }
    case 'SET_COMPARE':
      if (Array.isArray(action.payload)) {
        return { ...state, user: { ...state.user, compare: action.payload } }
      }

      return {
        ...state,
        user: {
          ...state.user,
          compare: [...state.user.compare, action.payload]
        }
      }
    case 'REMOVE_FROM_COMPARE':
      return {
        ...state,
        user: {
          ...state.user,
          compare: state.user.compare.filter(item => item !== action.payload)
        }
      }
    default:
      return state
  }
}
