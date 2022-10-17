import { ICategory } from '~/interfaces/category.interface'

export const findCategory = (
  categories: ICategory[],
  categoryIdToFind?: string
) => {
  const category = categories.find(
    category => category._id === categoryIdToFind
  )

  return category?.name
}
