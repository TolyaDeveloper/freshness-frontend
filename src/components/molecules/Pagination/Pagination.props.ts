export interface PaginationProps {
  count: number | undefined
  onHandlePagination(index: number): void
  className?: string
}
