import Link from 'next/link'
import { cnb } from 'cnbuilder'
import { CustomLink, Arrow } from '~/components/atoms'
import { NavbarProps } from './Navbar.props'

import styles from './Navbar.module.scss'

const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav className={cnb(styles.navbar, className)} {...props}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
              Bakery
            </CustomLink>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
              Fruit and vegetables
            </CustomLink>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
              Meat and fish
            </CustomLink>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
              Drinks
            </CustomLink>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
              Kitchen
            </CustomLink>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
              Special nutrition
            </CustomLink>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
              Baby
            </CustomLink>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <CustomLink level="body3" color="primary2" endAdornment={<Arrow />}>
              Pharmacy
            </CustomLink>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
