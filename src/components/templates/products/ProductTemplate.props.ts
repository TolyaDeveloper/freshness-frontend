import { IProduct } from '~/interfaces/product.interface'
import { IQuestionsReviewsCount } from '~/interfaces/questions-reviews-count.interface'

export interface ProductTemplateProps {
  product: Omit<IProduct, 'reviews' | 'questions'>
  questionsAndReviewsCount: IQuestionsReviewsCount | undefined
}
