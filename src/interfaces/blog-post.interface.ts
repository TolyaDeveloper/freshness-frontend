import { ICategory } from './category.interface'
import { ITag } from './tag.interface'
import { IUser } from './user.interface'

export interface IBlogPost {
  _id?: string
  createdBy: IUser
  createdAt: Date
  title: string
  postImageUri: string
  tags: ITag[]
  categories: ICategory[]
}
