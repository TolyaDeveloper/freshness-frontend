import { useMemo } from 'react'
import { useRouter } from 'next/router'
import {
  Select,
  Input,
  FormStyledWrapper,
  Arrow,
  Divider
} from '~/components/atoms'
import { ROUTES } from '~/constants/routes'
import { SearchProps } from './Search.props'
import { useAppContext } from '~/context/AppContext/App.context'
import { useForm } from 'react-hook-form'
import { computedTypesResolver } from '@hookform/resolvers/computed-types'
import {
  searchSchema,
  type SearchSchemaType
} from '~/validators/search.validator'
import SearchIcon from '~/assets/icons/search.svg'

import styles from './Search.module.scss'

const Search = ({ className }: SearchProps) => {
  const { state } = useAppContext()
  const { push } = useRouter()

  const { handleSubmit, register } = useForm<SearchSchemaType>({
    resolver: computedTypesResolver(searchSchema)
  })

  const renderedOptions = useMemo(() => {
    return state.categories.map(({ _id, name }) => (
      <option key={_id} value={name}>
        {name}
      </option>
    ))
  }, [state.categories])

  const onSubmit = ({ category, search }: SearchSchemaType) => {
    push({ pathname: ROUTES.search, query: { search, category } })
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
          {...register('category')}
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
            <button
              className={styles.searchButton}
              type="submit"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          }
          {...register('search')}
        />
      </FormStyledWrapper>
    </form>
  )
}

export default Search
