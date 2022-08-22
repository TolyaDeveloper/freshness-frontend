import { cnb } from 'cnbuilder'
import { PreSectionContainerProps } from './PreSectionContainer.props'

import styles from './PreSectionContainer.module.scss'

const PreSectionContainer = ({
  className,
  heading,
  button,
  ...props
}: PreSectionContainerProps) => {
  return (
    <div className={cnb(styles.preSectionContainer, className)} {...props}>
      {heading}
      {button}
    </div>
  )
}

export default PreSectionContainer
