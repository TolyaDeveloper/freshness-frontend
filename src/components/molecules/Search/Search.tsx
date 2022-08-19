import { useMemo } from 'react'
import {
  Select,
  Input,
  FormStyledWrapper,
  Arrow,
  Divider
} from '~/components/atoms'
import { SearchProps } from './Search.props'
import SearchIcon from '~/assets/icons/search.svg'
import { useAppContext } from '~/context/AppContext/App.context'

import styles from './Search.module.scss'

const Search = ({ className, ...props }: SearchProps) => {
  const { state } = useAppContext()

  const renderedOptions = useMemo(() => {
    return state.categories.map(({ _id, name }) => (
      <option key={_id} value={name}>
        {name}
      </option>
    ))
  }, [state.categories])

  return (
    <form className={className} autoComplete="off" {...props}>
      <FormStyledWrapper>
        <Select
          className={styles.select}
          endAdornment={<Arrow orientation="down" />}
        >
          <option value="">All categories</option>
          {renderedOptions}
        </Select>
        <Divider
          className={styles.divider}
          orienation="vertical"
          color="primary2"
        />
        <Input
          className={styles.input}
          placeholder="Search Products, categories ..."
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
