import { useState, useEffect, Fragment } from 'react'
import { cnb } from 'cnbuilder'
import { RatingProps } from './Rating.props'
import { pluralize } from '~/utils/pluralize'
import RatingIcon from '~/assets/icons/rating-star.svg'

import styles from './Rating.module.scss'

const Rating = ({
  className,
  rating,
  isEditable = false,
  max = 5,
  color = 'additional',
  onSetRating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState([...Array(max)])

  useEffect(() => {
    buildRating(rating)
  }, [rating])

  const handleRatingChange = (newRating: number) => {
    if (isEditable && onSetRating) {
      onSetRating(newRating)
    }
  }

  const onChangeDisplay = (newRating: number) => {
    if (isEditable) {
      buildRating(newRating)
    }
  }

  const buildRating = (amount: number) => {
    const renderedStars = ratingArray.map((_, index) => (
      <button
        className={cnb(styles.starButton, { [styles.isEditable]: isEditable })}
        key={index}
        type="button"
        aria-label={`${index + 1} ${pluralize(index + 1, 'star')}`}
        aria-pressed={index < amount}
        tabIndex={isEditable ? 0 : -1}
        onClick={() => handleRatingChange(index + 1)}
        onMouseOver={() => onChangeDisplay(index + 1)}
        onMouseLeave={() => onChangeDisplay(rating)}
        disabled={!isEditable}
      >
        <RatingIcon
          className={cnb(styles.star, { [styles[color]]: index < amount })}
        />
      </button>
    ))

    setRatingArray(renderedStars)
  }

  return (
    <span className={cnb(styles.rating, className)} {...props}>
      {ratingArray.map((star, index) => (
        <Fragment key={index}>{star}</Fragment>
      ))}
    </span>
  )
}

export default Rating
