import { ChangeEvent, useEffect, useState } from 'react'
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
import { getTrackBackground } from '~/utils/priceRange'
import Link from 'next/link'

import styles from './AsideFilters.module.scss'

const AsideFilters = ({
  className,
  filters: { categories, filters },
  activeFilters,
  setActiveFilters
}: AsideFiltersProps) => {
  const [shouldDisplayRange, setDisplayRange] = useState(false)
  const ratings = [5, 4, 3, 2, 1]

  const minPrice = filters.minMaxPrices[0]?.minPrice || 0
  const maxPrice = filters.minMaxPrices[0]?.maxPrice || 0
  const STEP = 1

  const [values, setValues] = useState<number[]>([])

  const handleBrand = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const isChecked = e.target.checked

    if (isChecked) {
      return setActiveFilters({
        ...activeFilters,
        brands: [...activeFilters.brands, value]
      })
    }

    return setActiveFilters({
      ...activeFilters,
      brands: activeFilters.brands?.filter(item => item !== value)
    })
  }

  const handleRating = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const isChecked = e.target.checked

    if (isChecked) {
      return setActiveFilters({
        ...activeFilters,
        rating: [...activeFilters.rating, value]
      })
    }

    return setActiveFilters({
      ...activeFilters,
      rating: activeFilters.rating?.filter(item => item !== value)
    })
  }

  const handleFinalChange = (values: number[]) => {
    return setActiveFilters({
      ...activeFilters,
      minPrice: [values[0]],
      maxPrice: [values[1]]
    })
  }

  useEffect(() => {
    const prices = [
      activeFilters.minPrice[0] || minPrice,
      activeFilters.maxPrice[0] || maxPrice
    ]
    setValues(prices)

    if (minPrice !== maxPrice) {
      return setDisplayRange(true)
    }

    setDisplayRange(false)
  }, [minPrice, maxPrice, activeFilters.minPrice, activeFilters.maxPrice])

  return (
    <div className={cnb(styles.asideFilters, className)}>
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
            onChange={handleBrand}
            value={brand.name}
            checked={activeFilters.brands?.includes(brand.name)}
          />
        ))}
      </LoadMoreList>
      <LoadMoreList className={styles.filterList} title="Rating">
        {ratings.map(rating => (
          <Checkbox
            key={rating}
            label={<Rating rating={rating} />}
            onChange={handleRating}
            value={rating}
            checked={activeFilters.rating?.includes(rating.toString())}
          />
        ))}
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
          onFinalChange={handleFinalChange}
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
    </div>
  )
}

export default AsideFilters
