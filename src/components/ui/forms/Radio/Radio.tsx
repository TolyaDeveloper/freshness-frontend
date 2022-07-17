import { cnb } from 'cnbuilder'
import { RadioProps } from './Radio.props'

import styles from './Radio.module.scss'

const Radio = ({ className, color = 'green', label, ...props }: RadioProps) => {
  return (
    <label className={cnb(styles.label, className)}>
      <input className={styles.radio} type="radio" {...props} />
      <span className={cnb(styles.customRadio, styles[color])} />
      <span>{label}</span>
    </label>
  )
}

export default Radio
