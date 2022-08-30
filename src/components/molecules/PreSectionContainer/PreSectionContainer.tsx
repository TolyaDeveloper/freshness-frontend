import { cnb } from 'cnbuilder'
import { PreSectionContainerProps } from './PreSectionContainer.props'

import styles from './PreSectionContainer.module.scss'

const PreSectionContainer = ({
  className,
  heading,
  button
}: PreSectionContainerProps) => (
  <div className={cnb(styles.preSectionContainer, className)}>
    {heading}
    {button}
  </div>
)

export default PreSectionContainer
