import { useState, Children } from 'react'
import { LoadMoreListProps } from './LoadMoreList.props'
import { Typography, Button, Arrow } from '~/components/atoms'

import styles from './LoadMoreList.module.scss'

const LoadMoreList = ({
  children,
  className,
  title,
  buttonTitle = 'More',
  limit,
  component: Component = 'div'
}: LoadMoreListProps) => {
  const [limitState, setMaxItemsState] = useState<typeof limit>(limit)
  const arrayChildren = Children.toArray(children)

  const isButtonShouldBeRendered =
    limitState && limitState < arrayChildren.length

  const renderedList = Children.map(
    arrayChildren.slice(0, limitState),
    child => <li className={styles.listItem}>{child}</li>
  )

  return (
    <Component className={className}>
      <Typography className={styles.title} level="h2-md">
        {title}
      </Typography>
      <ul>{renderedList}</ul>
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
    </Component>
  )
}

export default LoadMoreList
