import { RadioProps } from './Radio.props'
import { cnb } from 'cnbuilder'

import styles from './Radio.module.scss'

const Radio = ({ className, ...props }: RadioProps) => {
  return (
    <label className={cnb(styles.label, className)}>
      <input className={styles.radio} type="radio" {...props} />
      <span className={styles.customRadio} />
    </label>
  )
}

export default Radio
