import {
  Select,
  Input,
  FormStyledWrapper,
  Arrow,
  Divider
} from '~/components/atoms'
import { INPUT_PLACEHOLDER } from '~/constants/molecules/search'
import { SearchProps } from './Search.props'
import SearchIcon from '~/assets/icons/search.svg'

import styles from './Search.module.scss'

const Search = ({ className, ...props }: SearchProps) => {
  return (
    <form className={className} autoComplete="off" {...props}>
      <FormStyledWrapper>
        <Select
          className={styles.select}
          endAdornment={<Arrow orientation="down" />}
        >
          <option value="gfhfhfhgfhgfhfghgf">All categories</option>
        </Select>
        <Divider
          className={styles.divider}
          orienation="vertical"
          color="primary2"
        />
        <Input
          className={styles.input}
          placeholder={INPUT_PLACEHOLDER}
          endAdornment={
            <button className={styles.searchButton} type="submit">
              <SearchIcon />
            </button>
          }
        />
      </FormStyledWrapper>
    </form>
  )
}

export default Search
