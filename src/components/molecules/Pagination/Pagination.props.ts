export interface PaginationProps {
  count: number | undefined
  onHandlePagination(index: number): void
  activePage?: number
  className?: string
}
