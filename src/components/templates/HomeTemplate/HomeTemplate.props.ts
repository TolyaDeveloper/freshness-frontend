import { IBlogPost } from '~/interfaces/blog-post.interface'
import { ICategory } from '~/interfaces/category.interface'
import { ICustomerReview } from '~/interfaces/customer-review.interface'
import { IProduct } from '~/interfaces/product.interface'

export interface HomeTemplateProps {
  categories: ICategory[]
  blogPosts: IBlogPost[]
  customersReviews: ICustomerReview[]
  products: IProduct[]
}
