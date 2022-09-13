import { cnb } from 'cnbuilder'
import { SkeletonProps } from './Skeleton.props'

import styles from './Skeleton.module.scss'

const Skeleton = ({ className, variant }: SkeletonProps) => {
  return <div className={cnb(styles.skeleton, styles[variant], className)} />
}

export default Skeleton
