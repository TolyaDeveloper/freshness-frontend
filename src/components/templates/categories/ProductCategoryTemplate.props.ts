import { IFilters } from '~/interfaces/filters.interface'
import { IProduct } from '~/interfaces/product.interface'

export interface ProductCategoryTemplateProps {
  category: string | undefined
  products: IProduct[] | undefined
  filters: IFilters | undefined
}
