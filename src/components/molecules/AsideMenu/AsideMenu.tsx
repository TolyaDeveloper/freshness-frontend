import { useState, memo } from 'react'
import { AsideMenuProps } from './AsideMenu.props'
import { Typography, CustomLink, Button, Arrow } from '~/components/atoms'
import { ROUTES } from '~/constants/routes'
import Link from 'next/link'

import styles from './AsideMenu.module.scss'

const AsideMenu = ({
  className,
  categories,
  title,
  buttonTitle = 'More',
  maxCategories = 5
}: AsideMenuProps) => {
  const [currentCategories, setCurrentCategories] = useState(maxCategories)

  const isButtonShouldBeRendered =
    categories.length !== currentCategories && categories.length > maxCategories

  const renderedCategories = categories
    .slice(0, currentCategories)
    .map(({ _id, name }) => (
      <li className={styles.category} key={_id}>
        <Link href={`${ROUTES.categories}/${_id}`} passHref prefetch={false}>
          <CustomLink underline="always" level="body2">
            {name}
          </CustomLink>
        </Link>
      </li>
    ))

  return (
    <div className={className}>
      <Typography className={styles.title} level="h2-md">
        {title}
      </Typography>
      <ul>{renderedCategories}</ul>
      {isButtonShouldBeRendered && (
        <Button
          className={styles.button}
          variant="soft"
          endAdornment={<Arrow color="primary2" />}
          type="button"
          onClick={() => setCurrentCategories(categories.length)}
        >
          {buttonTitle}
        </Button>
      )}
    </div>
  )
}

export default memo(AsideMenu)
