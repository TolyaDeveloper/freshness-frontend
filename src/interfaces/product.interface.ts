import { ICategory } from './category.interface'
import { ITag } from './tag.interface'

export interface IProductDescriptionBlockVitamins {
  vitamin: string
  quantity: string
  dv: number
}

export interface IProductDescriptionBlock {
  origins: string
  howToCook: string
  vitamins: IProductDescriptionBlockVitamins[]
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
  inStock: number
  deliveryTime: string
  deliveryArea: string[]
  reviews: any[]
  questions: any[]
}
