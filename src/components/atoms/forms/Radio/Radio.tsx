import { cnb } from 'cnbuilder'
import { RadioProps } from './Radio.props'

import styles from './Radio.module.scss'

const Radio = ({
  className,
  labelTextClassname,
  color = 'secondary',
  label,
  ...props
}: RadioProps) => {
  return (
    <label className={cnb(styles.label, className)}>
      <input className={styles.radio} type="radio" {...props} />
      <span className={cnb(styles.customRadio, styles[color])} />
      {label && (
        <span className={cnb(styles.labelText, labelTextClassname)}>
          {label}
        </span>
      )}
    </label>
  )
}

export default Radio
