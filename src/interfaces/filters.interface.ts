import { ICategory } from './category.interface'

export interface IFilters {
  categories: { total: number; category: ICategory }[]
  filters: {
    minMaxPrices: [{ _id: null; minPrice: number; maxPrice: number }] | []
    brands: { brand: { _id: string; name: string } }[]
    countries: { total: number; country: string }[]
    farmCount: [{ total: number }] | []
    bioCount: [{ total: number }] | []
    totalCategoryProducts: [{ total: number }] | []
  }
}
