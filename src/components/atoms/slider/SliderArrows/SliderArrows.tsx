import { cnb } from 'cnbuilder'
import { SliderArrowsProps } from './SliderArrows.props'
import LeftSliderIcon from '~/assets/icons/left-slider-arrow.svg'
import RightSliderIcon from '~/assets/icons/right-slider-arrow.svg'

import styles from './SliderArrows.module.scss'

const LeftSliderArrow = ({ className, onClick }: SliderArrowsProps) => (
  <button
    className={cnb(styles.button, styles.prevArrow, className)}
    type="button"
    aria-label="Previous slide"
    onClick={onClick}
  >
    <LeftSliderIcon />
  </button>
)

const RightSliderArrow = ({ className, onClick }: SliderArrowsProps) => (
  <button
    className={cnb(styles.button, styles.nextArrow, className)}
    type="button"
    aria-label="Next slide"
    onClick={onClick}
  >
    <RightSliderIcon />
  </button>
)

export { LeftSliderArrow, RightSliderArrow }
