import { ICart } from '~/interfaces/cart.interface'
import { IUser } from '~/interfaces/user.interface'

export type UserActions =
  | { type: 'SET_USER'; payload: IUser }
  | { type: 'UPDATE_USER'; payload: Partial<IUser> }
  | { type: 'SET_USER_LOADING'; payload: boolean }
  | { type: 'SET_AUTH'; payload: boolean }
  | { type: 'SET_CART'; payload: ICart[] | ICart }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART'; payload: ICart }
  | { type: 'SET_WISHLIST'; payload: string | string[] }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'SET_COMPARE'; payload: string | string[] }
  | { type: 'REMOVE_FROM_COMPARE'; payload: string }
  | { type: 'SET_ORDERS_HISTORY'; payload: string[] }
  | { type: 'SHOULD_SYNC_TO_LOCAL_STORAGE'; payload: boolean }

export interface IUserState {
  user: IUser
  isAuthenticated: boolean
  isUserLoading: boolean
  shouldSyncToLocalStorage: boolean
}

export const initialValues: IUserState = {
  user: {
    cart: [],
    wishlist: [],
    compare: [],
    ordersHistory: []
  } as unknown as IUser,
  isAuthenticated: false,
  isUserLoading: false,
  shouldSyncToLocalStorage: false
}
