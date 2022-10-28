import { ICart } from './cart.interface'

export interface IUser {
  _id?: string
  firstName: string
  lastName: string
  email: string
  roles?: string[]
  isActivated?: boolean
  avatarUri: string
  wishlist: string[]
  cart: ICart[]
  ordersHistory: string[]
  compare: string[]
}
