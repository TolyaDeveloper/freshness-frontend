import { IUserState, UserActions } from './User.types'

export const userReducer = (state: IUserState, action: UserActions) => {
  switch (action.type) {
    case 'SET_USER':
      if (!action.payload) {
        return { ...state, user: null }
      }

      return { ...state, user: { ...state.user, ...action.payload } }
    case 'SET_USER_LOADING':
      return { ...state, isUserLoading: action.payload }
    default:
      return state
  }
}
