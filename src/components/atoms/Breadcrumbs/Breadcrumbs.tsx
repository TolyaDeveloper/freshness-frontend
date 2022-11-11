import { Children } from 'react'
import { cnb } from 'cnbuilder'
import { BreadcrumbsProps } from './Breadcrumbs.props'
import { HOMEPAGE } from '~/constants/common'
import { CustomLink } from '~/components/atoms'
import { PAGES } from '~/constants/routes'
import Link from 'next/link'

import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({
  children,
  className,
  separator = '/',
  homeText = HOMEPAGE,
  ...props
}: BreadcrumbsProps) => {
  const arrayChildren = Children.toArray(children)

  return (
    <nav className={cnb(styles.breadcrumbs, className)} {...props}>
      <ol>
        <li>
          <Link href={PAGES.home} passHref>
            <CustomLink color="primary1">{homeText}</CustomLink>
          </Link>
        </li>
        <li className={styles.separator} aria-hidden={true}>
          {separator}
        </li>
        {Children.map(arrayChildren, (child, index) => {
          const isLast = index === arrayChildren.length - 1

          return (
            <>
              <li>{child}</li>
              {!isLast && (
                <li className={styles.separator} aria-hidden={true}>
                  {separator}
                </li>
              )}
            </>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
