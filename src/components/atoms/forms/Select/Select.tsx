import { cnb } from 'cnbuilder'
import { SelectProps } from './Select.props'

import styles from './Select.module.scss'

const Select = ({
  children,
  className,
  endAdornment,
  ...props
}: SelectProps) => {
  return (
    <div className={cnb(styles.selectWrapper, className)}>
      <select className={styles.select} {...props}>
        {children}
      </select>
      {endAdornment && (
        <span className={styles.endAdornment}>{endAdornment}</span>
      )}
    </div>
  )
}

export default Select
