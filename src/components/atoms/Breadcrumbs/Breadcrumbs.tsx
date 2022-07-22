import { Children } from 'react'
import { cnb } from 'cnbuilder'
import { BreadcrumbsProps } from './Breadcrumbs.props'

import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({
  children,
  className,
  separator = '/',
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
