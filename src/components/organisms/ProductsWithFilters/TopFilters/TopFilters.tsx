import { ChangeEvent, useEffect, useState } from 'react'
import { cnb } from 'cnbuilder'
import {
  FormStyledWrapper,
  Radio,
  Checkbox,
  Tag,
  Divider,
  Select,
  Arrow
} from '~/components/atoms'
import { TopFiltersProps } from './TopFilters.props'
import { radios } from './TopFilters.variables'

import styles from './TopFilters.module.scss'

const TopFilters = ({
  className,
  filters: { filters },
  activeFilters,
  setActiveFilters
}: TopFiltersProps) => {
  const [countryCheckbox, setCountryCheckbox] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(
    activeFilters.country[0] || filters.countries[0]?.country
  )

  useEffect(() => {
    if (countryCheckbox) {
      return setActiveFilters({ ...activeFilters, country: [selectedCountry] })
    }
  }, [selectedCountry])

  useEffect(() => {
    setCountryCheckbox(Boolean(activeFilters.country.length))
  }, [activeFilters.country])

  const handlePriceTypeRadios = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveFilters({ ...activeFilters, priceType: [e.target.value] })
  }

  const handleBiology = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const isChecked = e.target.checked

    if (isChecked) {
      return setActiveFilters({
        ...activeFilters,
        biology: [...(activeFilters.biology as string[]), value]
      })
    }

    return setActiveFilters({
      ...activeFilters,
      biology: activeFilters.biology?.filter(item => item !== value)
    })
  }

  const handleCountrySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value)
  }

  const handleCountryCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      return setActiveFilters({ ...activeFilters, country: [selectedCountry] })
    }

    return setActiveFilters({ ...activeFilters, country: [] })
  }

  return (
    <div className={cnb(styles.topFilters, className)}>
      <FormStyledWrapper>
        {radios.map(({ label, value }) => (
          <Radio
            checked={activeFilters.priceType?.includes(value)}
            onChange={handlePriceTypeRadios}
            className={styles.priceRadio}
            key={value}
            value={value}
            label={label}
            name="variant"
          />
        ))}
      </FormStyledWrapper>
      <FormStyledWrapper>
        <Checkbox
          value="Farm"
          label={
            <>Farm {<Tag size="sm">{filters.farmCount[0]?.total || 0}</Tag>}</>
          }
          onChange={handleBiology}
          checked={activeFilters.biology?.includes('Farm')}
        />
      </FormStyledWrapper>
      <FormStyledWrapper>
        <Checkbox
          value="Bio"
          label={
            <>Bio {<Tag size="sm">{filters.bioCount[0]?.total || 0}</Tag>}</>
          }
          onChange={handleBiology}
          checked={activeFilters.biology?.includes('Bio')}
        />
      </FormStyledWrapper>
      {filters.countries.length !== 0 && (
        <FormStyledWrapper>
          <Checkbox
            value="Bio"
            label={<>{<Tag variant="soft">0</Tag>}</>}
            checked={countryCheckbox}
            onChange={handleCountryCheckbox}
          />
          <Divider orienation="vertical" />
          <Select
            endAdornment={<Arrow />}
            onChange={handleCountrySelect}
            value={selectedCountry}
          >
            {filters.countries.map(({ country }, i) => (
              <option key={i}>{country}</option>
            ))}
          </Select>
        </FormStyledWrapper>
      )}
    </div>
  )
}

export default TopFilters
