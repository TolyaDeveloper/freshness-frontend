import { useEffect, useState } from 'react'
import { cnb } from 'cnbuilder'
import { Range } from 'react-range'
import { AsideFiltersProps } from './AsideFilters.props'
import {
  Typography,
  Tag,
  Rating,
  Checkbox,
  Button,
  FormStyledWrapper,
  Input,
  CustomLink,
  Label
} from '~/components/atoms'
import { LoadMoreList } from '~/components/molecules'
import { ROUTES } from '~/constants/routes'

import Link from 'next/link'

import styles from './AsideFilters.module.scss'

export enum Direction {
  Right = 'to right',
  Left = 'to left',
  Down = 'to bottom',
  Up = 'to top'
}

export interface ITrackBackground {
  min: number
  max: number
  values: number[]
  colors: string[]
  direction?: Direction
  rtl?: boolean
}

export function getTrackBackground({
  values,
  colors,
  min,
  max,
  direction = Direction.Right,
  rtl = false
}: ITrackBackground) {
  if (rtl && direction === Direction.Right) {
    direction = Direction.Left
  } else if (rtl && Direction.Left) {
    direction = Direction.Right
  }
  // sort values ascending
  const progress = values
    .slice(0)
    .sort((a, b) => a - b)
    .map(value => ((value - min) / (max - min)) * 100)
  const middle = progress.reduce(
    (acc, point, index) =>
      `${acc}, ${colors[index]} ${point}%, ${colors[index + 1]} ${point}%`,
    ''
  )
  return `linear-gradient(${direction}, ${colors[0]} 0%${middle}, ${
    colors[colors.length - 1]
  } 100%)`
}

const AsideFilters = ({
  className,
  filters: { categories, filters }
}: AsideFiltersProps) => {
  const [shouldDisplayRange, setDisplayRange] = useState(false)

  const minPrice = filters.minMaxPrices[0]?.minPrice || 0
  const maxPrice = filters.minMaxPrices[0]?.maxPrice || 0
  const STEP = 1

  const [values, setValues] = useState<number[]>([])

  useEffect(() => {
    setValues([minPrice, maxPrice])

    if (minPrice !== maxPrice) {
      return setDisplayRange(true)
    }

    setDisplayRange(false)
  }, [minPrice, maxPrice])

  return (
    <form className={cnb(styles.asideFilters, className)} autoComplete="off">
      <LoadMoreList className={styles.filterList} title="Categories" limit={3}>
        {categories.map(({ category, total }) => (
          <Link
            key={category._id}
            href={`${ROUTES.categories}/${category._id}`}
            passHref
            prefetch={false}
          >
            <CustomLink className={styles.categoryLink} level="body2">
              <span>{category.name}</span>
              <Tag size="sm">{total}</Tag>
            </CustomLink>
          </Link>
        ))}
      </LoadMoreList>
      <LoadMoreList className={styles.filterList} title="Brands" limit={4}>
        {filters.brands.map(({ brand }) => (
          <Checkbox
            key={brand._id}
            label={<Typography level="body4">{brand.name}</Typography>}
          />
        ))}
      </LoadMoreList>
      <LoadMoreList className={styles.filterList} title="Rating">
        <Checkbox label={<Rating rating={5} />} />
        <Checkbox label={<Rating rating={4} />} />
        <Checkbox label={<Rating rating={3} />} />
        <Checkbox label={<Rating rating={2} />} />
        <Checkbox label={<Rating rating={1} />} />
      </LoadMoreList>
      <Typography className={styles.ratingTitle} level="h2-md">
        Price
      </Typography>
      {shouldDisplayRange && (
        <Range
          values={values}
          step={STEP}
          min={minPrice}
          max={maxPrice}
          onChange={values => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '20px',
                display: 'flex',
                width: '95%'
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '6px',
                  width: '100%',
                  borderRadius: '12px',
                  background: getTrackBackground({
                    values,
                    colors: ['#EBEBEB', '#6A983C', '#EBEBEB'],
                    min: minPrice,
                    max: maxPrice
                  }),
                  alignSelf: 'center'
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                border: '1px solid #D1D1D1',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
          )}
        />
      )}
      <div className={styles.priceInputsWrapper}>
        <div>
          <Label>Min</Label>
          <FormStyledWrapper className={styles.formStyledWrapper}>
            <Input
              className={styles.priceInput}
              min={minPrice}
              type="number"
              defaultValue={values[0]}
              readOnly
            />
          </FormStyledWrapper>
        </div>
        <Typography level="body4" color="primary2" component="span">
          -
        </Typography>
        <div>
          <Label>Max</Label>
          <FormStyledWrapper className={styles.formStyledWrapper}>
            <Input
              className={styles.priceInput}
              max={maxPrice}
              type="number"
              defaultValue={values[1]}
              readOnly
            />
          </FormStyledWrapper>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <Button className={styles.applyButton} type="submit">
          Apply
        </Button>
        <Button variant="plain" type="reset">
          Reset
        </Button>
      </div>
    </form>
  )
}

export default AsideFilters
