import { Children } from 'react'
import { cnb } from 'cnbuilder'
import { BreadcrumbsProps } from './Breadcrumbs.props'
import { HOMEPAGE } from '~/constants/common'
import { CustomLink } from '~/components/atoms'
import { ROUTES } from '~/constants/routes'
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
        {Children.map(arrayChildren, (child, index) => {
          const isLast = index === arrayChildren.length - 1

          return (
            <>
              <Link href={ROUTES.home} passHref>
                <CustomLink color="primary1">{homeText}</CustomLink>
              </Link>
              <li className={styles.separator} aria-hidden={true}>
                {separator}
              </li>
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
