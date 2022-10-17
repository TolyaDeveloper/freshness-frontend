import { IFilters } from '~/interfaces/filters.interface'

export interface ProductsWithFilters {
  filters: IFilters | undefined
  category: string | undefined
}
