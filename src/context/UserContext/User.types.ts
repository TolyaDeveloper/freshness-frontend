import { ICart } from '~/interfaces/cart.interface'
import { IUser } from '~/interfaces/user.interface'

export type UserActions =
  | { type: 'SET_USER'; payload: IUser }
  | { type: 'SET_USER_LOADING'; payload: boolean }
  | { type: 'SET_AUTH'; payload: boolean }
  | { type: 'SET_CART'; payload: ICart }
  | { type: 'SET_WISHLIST'; payload: string }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'SET_COMPARE'; payload: string }
  | { type: 'REMOVE_FROM_COMPARE'; payload: string }

export interface IUserState {
  user: IUser
  isAuthenticated: boolean
  isUserLoading: boolean
}

export const initialValues: IUserState = {
  user: {
    cart: [],
    wishlist: [],
    compare: [],
    ordersHistory: []
  } as unknown as IUser,
  isAuthenticated: false,
  isUserLoading: false
}
