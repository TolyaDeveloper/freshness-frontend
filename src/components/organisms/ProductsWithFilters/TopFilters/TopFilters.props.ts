import { Dispatch, SetStateAction } from 'react'
import { IFilters } from '~/interfaces/filters.interface'
import { IQueries } from '~/interfaces/queries.interface'

export interface TopFiltersProps {
  className?: string
  filters: IFilters
  activeFilters: IQueries
  setActiveFilters: (queries: IQueries) => void
}
