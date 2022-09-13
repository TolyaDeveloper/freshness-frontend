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

import styles from './TopFilters.module.scss'

const TopFilters = ({ className }: TopFiltersProps) => {
  return (
    <div className={cnb(styles.topFilters, className)}>
      <FormStyledWrapper>
        <Radio
          className={styles.priceRadio}
          value="Most popular"
          label="Most popular"
          name="variant"
        />
        <Radio
          className={styles.priceRadio}
          value="Cheapest"
          label="Cheapest"
          name="variant"
        />
      </FormStyledWrapper>
      <FormStyledWrapper>
        <Checkbox label="Farm" />
      </FormStyledWrapper>
      <FormStyledWrapper>
        <Checkbox label="Bio" />
      </FormStyledWrapper>
      <FormStyledWrapper>
        <Checkbox />
        <Tag variant="soft">12</Tag>
        <Divider orienation="vertical" />
        <Select endAdornment={<Arrow />}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Select>
      </FormStyledWrapper>
    </div>
  )
}

export default TopFilters
