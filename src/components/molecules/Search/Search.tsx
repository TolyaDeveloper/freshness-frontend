import { useMemo } from 'react'
import { useRouter } from 'next/router'
import {
  Select,
  Input,
  FormStyledWrapper,
  Arrow,
  Divider
} from '~/components/atoms'
import { PAGES } from '~/constants/routes'
import { SearchProps } from './Search.props'
import { useForm } from 'react-hook-form'
import { ISearchFields, LoginSchema } from '~/validators/search.validator'
import SearchIcon from '~/assets/icons/search.svg'

import styles from './Search.module.scss'

const Search = ({ className, categories }: SearchProps) => {
  const { push } = useRouter()

  const { handleSubmit, register } = useForm<ISearchFields>()

  const renderedOptions = useMemo(() => {
    return categories?.map(({ _id, name }) => (
      <option key={_id} value={name}>
        {name}
      </option>
    ))
  }, [categories])

  const onSubmit = ({ category, search }: ISearchFields) => {
    push({ pathname: PAGES.search, query: { search, category } })
  }

  return (
    <form
      className={className}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormStyledWrapper>
        <Select
          className={styles.select}
          endAdornment={<Arrow orientation="down" />}
          {...register('category', LoginSchema.category)}
        >
          <option>All categories</option>
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
            <button
              className={styles.searchButton}
              type="submit"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          }
          {...register('search', LoginSchema.search)}
        />
      </FormStyledWrapper>
    </form>
  )
}

export default Search
