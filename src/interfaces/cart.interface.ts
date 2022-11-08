export enum ProductCartVariantEnum {
  PCS = 'Pcs',
  KGS = 'Kgs',
  BOX = 'Box',
  PACK = 'Pack'
}
export interface ICart {
  variant: ProductCartVariantEnum
  quantity: number
  productId: string
}
