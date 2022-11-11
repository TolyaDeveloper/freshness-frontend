import { IUser } from './user.interface'

export interface IProductComment {
  _id: string
  reviews: {
    _id: string
    comment: string
    user: IUser
    createdAt: Date
  }[]
}
