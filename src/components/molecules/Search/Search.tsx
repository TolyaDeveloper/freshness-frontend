import { cnb } from 'cnbuilder'
import { Select, Input, FormStyledWrapper, Arrow } from '~/components/atoms'
import { INPUT_PLACEHOLDER } from '~/constants/molecules/search'
import { SearchProps } from './Search.props'
import SearchIcon from '~/assets/icons/search.svg'

import styles from './Search.module.scss'

const Search = ({}: SearchProps) => {
  return (
    <form autoComplete="off">
      <FormStyledWrapper>
        <Select
          className={styles.select}
          endAdornment={<Arrow orientation="down" />}
        >
          <option value="gfhfhfhgfhgfhfghgf">All categories</option>
        </Select>
        <div className={styles.divider} />
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
