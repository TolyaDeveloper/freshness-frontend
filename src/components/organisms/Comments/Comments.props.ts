import { ReactElement } from 'react'
import { IProductReview } from '~/interfaces/product.interface'

export interface CommentsProps {
  productId: string
  commentsForm?: ReactElement
}
