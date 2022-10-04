import { cnb } from 'cnbuilder'
import { SkeletonProps } from './Skeleton.props'
import { LayoutType } from '~/interfaces/layout.types'

import styles from './Skeleton.module.scss'

const Skeleton = ({ className, variant, height, width }: SkeletonProps) => (
  <div
    className={cnb(styles.skeleton, styles[variant], className)}
    style={{ height, width }}
  />
)

const ProductsSkeleton = ({
  limit = 3,
  layout = 'grid'
}: {
  limit: number
  layout?: LayoutType
}) => (
  <div className={cnb(styles[layout])}>
    {[...Array(limit)].map((_, index) => (
      <div key={index}>
        <Skeleton className={styles.image} variant="rounded" height="160px" />
        <Skeleton className={styles.title} variant="text" />
        <Skeleton className={styles.descripton} variant="text" width="100px" />
        <Skeleton className={styles.rating} variant="text" />
      </div>
    ))}
  </div>
)

const FiltersSkeleton = ({ limit = 3 }: { limit: number }) => (
  <div>
    {[...Array(limit)].map((_, index) => (
      <div className={styles.filterBlock} key={index}>
        <Skeleton className={styles.filterTitle} variant="text" height="25px" />
        <Skeleton className={styles.filter} variant="text" />
        <Skeleton className={styles.filter} variant="text" />
        <Skeleton className={styles.filter} variant="text" />
      </div>
    ))}
  </div>
)

export { Skeleton, ProductsSkeleton, FiltersSkeleton }
