import { memo } from 'react'
import { cnb } from 'cnbuilder'
import { CustomLink, Arrow } from '~/components/atoms'
import { NavbarProps } from './Navbar.props'
import { PAGES } from '~/constants/routes'
import Link from 'next/link'

import styles from './Navbar.module.scss'

const Navbar = ({ className, categoryItems }: NavbarProps) => {
  const renderCategories = () => {
    return categoryItems.slice(0, 8).map(({ _id, name }) => (
      <li key={_id} className={styles.listItem}>
        <Link href={`${PAGES.categories}/${_id}`} passHref prefetch={false}>
          <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
            {name}
          </CustomLink>
        </Link>
      </li>
    ))
  }

  return (
    <nav className={cnb(styles.navbar, className)}>
      <ul className={styles.list}>{renderCategories()}</ul>
    </nav>
  )
}

export default memo(Navbar)
