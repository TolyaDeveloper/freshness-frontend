import { cnb } from 'cnbuilder'
import { Tag, Typography } from '~/components/atoms'
import { CounterProps } from './Counter.props'

import styles from './Counter.module.scss'

const Counter = ({ className, title, counter = 0 }: CounterProps) => {
  return (
    <div className={cnb(styles.counter, className)}>
      <Tag className={styles.tag} size="sm">
        {counter}
      </Tag>
      <Typography level="body6" color="primary2">
        {title}
      </Typography>
    </div>
  )
}

export default Counter
