import { cnb } from 'cnbuilder'
import { ChangeEvent, useEffect, useState } from 'react'
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
import { useRouter } from 'next/router'
import { radios, biologies } from './TopFilters.variables'

import styles from './TopFilters.module.scss'
import { ROUTES } from '~/constants/routes'
import { ParsedUrlQuery } from 'querystring'

interface ITopFilters {
  priceType?: string
  farm?: boolean
  bio?: boolean
  country?: boolean
  countryName?: string
}

const TopFilters = ({ className, filters: { filters } }: TopFiltersProps) => {
  const [topFilters, setTopFilters] = useState<ITopFilters>({})

  const { query, push } = useRouter()

  useEffect(() => {
    setTopFilters(query)
  }, [query])

  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setTopFilters({ ...topFilters, priceType: e.target.value })

    push({
      query: {
        productCategory: query.productCategory,
        priceType: e.target.value
      }
    })
  }

  const handleFarmBiology = (e: ChangeEvent<HTMLInputElement>) => {
    setTopFilters({ ...topFilters, farm: Boolean(e.target.value) })

    push({
      query: {
        productCategory: query.productCategory,
        farm: Boolean(e.target.value)
      }
    })
  }

  return (
    <div className={cnb(styles.topFilters, className)}>
      <FormStyledWrapper>
        {radios.map(({ label, value }) => (
          <Radio
            checked={topFilters.priceType === value}
            className={styles.priceRadio}
            key={value}
            value={value}
            label={label}
            name="variant"
            onChange={handleRadio}
          />
        ))}
      </FormStyledWrapper>
      <FormStyledWrapper>
        <Checkbox
          value="Farm"
          label={
            <>Farm {<Tag size="sm">{filters.farmCount[0]?.total || 0}</Tag>}</>
          }
          onChange={handleFarmBiology}
          checked={topFilters.farm}
        />
      </FormStyledWrapper>
      <FormStyledWrapper>
        <Checkbox
          value="Farm"
          label={
            <>Bio {<Tag size="sm">{filters.bioCount[0]?.total || 0}</Tag>}</>
          }
        />
      </FormStyledWrapper>
      <FormStyledWrapper>
        <Checkbox />
        <Tag variant="soft">12</Tag>
        <Divider orienation="vertical" />
        <Select endAdornment={<Arrow />}>
          {filters.countries.map(({ country }, i) => (
            <option key={i}>{country}</option>
          ))}
        </Select>
      </FormStyledWrapper>
    </div>
  )
}

export default TopFilters
