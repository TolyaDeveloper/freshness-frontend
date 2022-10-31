import { IProduct } from './product.interface'

export enum ProductCartVariantEnum {
  PCS = 'Pcs',
  KGS = 'Kgs',
  BOX = 'Box',
  PACK = 'Pack'
}

export interface ICartProduct
  extends Pick<
    IProduct,
    | '_id'
    | 'imageUri'
    | 'smallDescription'
    | 'price'
    | 'oldPrice'
    | 'rating'
    | 'title'
  > {}

export interface ICart {
  variant: ProductCartVariantEnum
  amount: number
  _id: ICartProduct
}
