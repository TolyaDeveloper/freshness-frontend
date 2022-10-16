import { IFilters } from '~/interfaces/filters.interface'
import { IProduct } from '~/interfaces/product.interface'

export interface ProductsWithFilters {
  filters: IFilters | undefined
  category: string | undefined
}
