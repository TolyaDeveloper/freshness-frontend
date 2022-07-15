import { useState, useEffect, Fragment } from 'react'
import { cnb } from 'cnbuilder'
import { RatingProps } from './Rating.props'
import { pluralize } from '~/utils/pluralize'

import RatingIcon from './rating-star.svg'

import styles from './Rating.module.scss'

const Rating = ({
  className,
  rating,
  isEditable = false,
  onSetRating,
  ...props
}: RatingProps) => {
  const [totalStars, setTotalStars] = useState(Array(5).fill(<></>))

  useEffect(() => {
    setStars(rating)
  }, [rating])

  const onHandleChangeRating = (newRating: number) => {
    if (isEditable && onSetRating) {
      onSetRating(newRating)
    }
  }

  const setStars = (amount: number) => {
    const rating = totalStars.map((_, i) => (
      <button
        className={cnb(styles.starButton, { [styles.isEditable]: isEditable })}
        key={i}
        type="button"
        aria-label={`${i + 1} ${pluralize(i + 1, 'star')}`}
        aria-pressed={i < amount}
        tabIndex={isEditable ? 0 : -1}
        onClick={() => onHandleChangeRating(i + 1)}
        disabled={!isEditable}
      >
        <RatingIcon
          className={cnb(styles.star, { [styles.filled]: i < amount })}
        />
      </button>
    ))

    setTotalStars(rating)
  }

  return (
    <span className={cnb(styles.rating, className)} {...props}>
      {totalStars.map((star, i) => (
        <Fragment key={i}>{star}</Fragment>
      ))}
    </span>
  )
}

export default Rating
