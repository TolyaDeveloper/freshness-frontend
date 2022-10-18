export enum ProductCartTypeEnum {
  PCS = 'Pcs',
  KGS = 'Kgs',
  BOX = 'Box',
  PACK = 'Pack'
}

export interface ICart {
  type: ProductCartTypeEnum
  amount: number
  _id: string
}
