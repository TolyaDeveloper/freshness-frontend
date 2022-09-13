import { cnb } from 'cnbuilder'
import { AsideFiltersProps } from './AsideFilters.props'
import {
  Typography,
  Tag,
  Rating,
  Checkbox,
  Button,
  FormStyledWrapper,
  Input,
  CustomLink
} from '~/components/atoms'
import { ROUTES } from '~/constants/routes'
import { useAppContext } from '~/context/AppContext/App.context'
import Link from 'next/link'

import styles from './AsideFilters.module.scss'

const AsideFilters = ({ className, brands }: AsideFiltersProps) => {
  const { state } = useAppContext()

  return (
    <div className={cnb(styles.asideFilters, className)}>
      <Typography level="h2-md">Categories</Typography>
      <ul>
        {state.categories.slice(0, 4).map(category => (
          <li key={category._id}>
            <Link href={`${ROUTES.categories}/${category._id}`} passHref>
              <CustomLink>{category.name}</CustomLink>
            </Link>
          </li>
        ))}
      </ul>
      <Typography level="h2-md">Brands</Typography>
      <ul>
        {brands.map((brand, i) => (
          <Checkbox key={i} label={brand} />
        ))}
      </ul>
    </div>
  )
}

export default AsideFilters
