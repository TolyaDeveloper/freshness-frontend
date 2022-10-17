import { cnb } from 'cnbuilder'
import { PaginationProps } from './Pagination.props'
import { Typography } from '~/components/atoms'

import styles from './Pagination.module.scss'

const Pagination = ({
  className,
  count,
  onHandlePagination
}: PaginationProps) => {
  return (
    <nav className={cnb(styles.pagination, className)}>
      <Typography level="body6" color="primary2">
        Page
      </Typography>
      <ul className={styles.paginationList}>
        {[...Array(count)].map((_, index) => (
          <Typography
            level="body5"
            component="li"
            className={styles.paginationItem}
            key={index}
          >
            <Typography
              onClick={() => onHandlePagination(index)}
              className={styles.paginationButton}
              level="body5"
              component="button"
              aria-label={`Page ${index + 1}, total ${count}`}
            >
              {index + 1}
            </Typography>
          </Typography>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
