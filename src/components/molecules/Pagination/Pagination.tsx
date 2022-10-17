import { cnb } from 'cnbuilder'
import { PaginationProps } from './Pagination.props'
import { Typography, CustomLink } from '~/components/atoms'
import Link from 'next/link'

import styles from './Pagination.module.scss'

const Pagination = ({ className, count, link }: PaginationProps) => {
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
            <Link
              href={`${link}skip=${index * 9}`}
              passHref={true}
              prefetch={false}
            >
              <CustomLink>{index + 1}</CustomLink>
            </Link>
          </Typography>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
