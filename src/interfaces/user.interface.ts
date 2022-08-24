import { IProduct } from './product.interface'

export interface IUser {
  _id: string
  firstName: string
  lastName: string
  email: string
  roles?: string[]
  isActivated?: boolean
  avatarUri: string
  wishlist: IProduct[]
  cart: IProduct[]
  ordersHistory: IProduct[]
  compare: IProduct[]
}
