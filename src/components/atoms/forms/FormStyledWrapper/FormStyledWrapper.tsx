import { cnb } from 'cnbuilder'
import { FormStyledWrapperProps } from './FormStyledWrapper.props'

import styles from './FormStyledWrapper.module.scss'

const FormStyledWrapper = ({
  children,
  className,
  ...props
}: FormStyledWrapperProps) => {
  return (
    <div className={cnb(styles.styledWrapper, className)} {...props}>
      {children}
    </div>
  )
}

export default FormStyledWrapper
