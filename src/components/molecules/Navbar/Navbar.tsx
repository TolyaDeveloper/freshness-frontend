import { memo } from 'react'
import { cnb } from 'cnbuilder'
import { CustomLink, Arrow } from '~/components/atoms'
import { NavbarProps } from './Navbar.props'
import Link from 'next/link'

import styles from './Navbar.module.scss'

const Navbar = ({ className, categoryItems, ...props }: NavbarProps) => {
  const renderCategories = () => {
    return categoryItems.slice(0, 8).map(category => (
      <li key={category._id} className={styles.listItem}>
        <Link href={`/${category.slug}`} passHref>
          <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
            {category.name}
          </CustomLink>
        </Link>
      </li>
    ))
  }

  return (
    <nav className={cnb(styles.navbar, className)} {...props}>
      <ul className={styles.list}>{renderCategories()}</ul>
    </nav>
  )
}

export default memo(Navbar)
