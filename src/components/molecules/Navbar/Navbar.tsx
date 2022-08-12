import Link from 'next/link'
import { cnb } from 'cnbuilder'
import { CustomLink, Arrow } from '~/components/atoms'
import { NavbarProps } from './Navbar.props'
import { useAppContext } from '~/context/AppContext/App.context'

import styles from './Navbar.module.scss'

const Navbar = ({ className, ...props }: NavbarProps) => {
  const { state } = useAppContext()

  const renderLinks = () => {
    return state.categories.map(category => (
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
      <ul className={styles.list}>{renderLinks()}</ul>
    </nav>
  )
}

export default Navbar
