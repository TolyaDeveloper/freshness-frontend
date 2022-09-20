import { cnb } from 'cnbuilder'
import { SkeletonProps } from './Skeleton.props'

import styles from './Skeleton.module.scss'

const Skeleton = ({ className, variant, height, width }: SkeletonProps) => (
  <div
    className={cnb(styles.skeleton, styles[variant], className)}
    style={{ height, width }}
  />
)

const ProductsSkeleton = ({ limit = 3 }: { limit: number }) => (
  <div className={styles.productsSkeletonWrapper}>
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

export { Skeleton, ProductsSkeleton }
