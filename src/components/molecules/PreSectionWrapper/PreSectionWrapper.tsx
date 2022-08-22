import { cnb } from 'cnbuilder'
import { PreSectionWrapperProps } from './PreSectionWrapper.props'

import styles from './PreSectionWrapper.module.scss'

const PreSectionWrapper = ({
  className,
  heading,
  button,
  ...props
}: PreSectionWrapperProps) => {
  return (
    <div className={cnb(styles.preSectionWrapper, className)} {...props}>
      {heading}
      {button}
    </div>
  )
}

export default PreSectionWrapper
