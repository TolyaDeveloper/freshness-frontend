import { ICategory } from './category.interface'
import { ITag } from './tag.interface'
import { IUser } from './user.interface'

export interface IProductDescriptionBlockVitamins {
  vitamin: string
  quantity: string
  dv: string
}

export interface IProductDescriptionBlock {
  origins?: string
  howToCook?: string
  vitamins?: IProductDescriptionBlockVitamins[]
}

export interface IProductReview {
  _id: string
  user: IUser
  comment: string
  createdAt: Date
}

export interface IProduct {
  _id: string
  title: string
  imageUri: string
  description: string
  smallDescription: string
  descriptionBlock: IProductDescriptionBlock
  price: number
  oldPrice?: number
  rating: number
  sku: number
  tags: ITag[]
  categories: ICategory[]
  farm: string
  buyBy: string
  freshness: string
  inStock: boolean
  deliveryTime: string
  deliveryArea: string[]
  reviews: IProductReview[]
  questions: any[]
}
