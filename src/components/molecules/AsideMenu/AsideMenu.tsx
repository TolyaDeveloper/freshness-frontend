import { useState, memo, Children } from 'react'
import { AsideMenuProps } from './AsideMenu.props'
import { Typography, Button, Arrow } from '~/components/atoms'

import styles from './AsideMenu.module.scss'

const AsideMenu = ({
  children,
  className,
  title,
  buttonTitle = 'More',
  maxItems
}: AsideMenuProps) => {
  const [maxItemsState, setMaxItemsState] = useState<typeof maxItems>(maxItems)
  const arrayChildren = Children.toArray(children)

  const isButtonShouldBeRendered =
    maxItemsState && maxItemsState < arrayChildren.length

  const renderedCategories = Children.map(
    arrayChildren.slice(0, maxItemsState),
    child => <li className={styles.category}>{child}</li>
  )

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
          onClick={() => setMaxItemsState(arrayChildren.length)}
        >
          {buttonTitle}
        </Button>
      )}
    </div>
  )
}

export default memo(AsideMenu)
