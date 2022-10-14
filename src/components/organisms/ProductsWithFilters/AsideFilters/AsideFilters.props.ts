import { IFilters } from '~/interfaces/filters.interface'
import { IQueries } from '~/interfaces/queries.interface'

export interface AsideFiltersProps {
  className?: string
  filters: IFilters
  activeFilters: IQueries
  setActiveFilters: (queries: IQueries) => void
}
