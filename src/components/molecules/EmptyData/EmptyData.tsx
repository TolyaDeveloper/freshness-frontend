import { cnb } from 'cnbuilder'
import { EmptyDataProps } from './EmptyData.props'
import { Button, Typography } from '~/components/atoms'
import { PAGES } from '~/constants/routes'
import Link from 'next/link'

import styles from './EmptyData.module.scss'

const EmptyData = ({
  className,
  title,
  buttonMessage = 'Find more products'
}: EmptyDataProps) => {
  return (
    <div className={cnb(styles.wrapper, className)}>
      <Typography level="h2-lg">{title}</Typography>
      <Link href={PAGES.home} passHref>
        <Button className={styles.moreLink} variant="outlined">
          {buttonMessage}
        </Button>
      </Link>
    </div>
  )
}

export default EmptyData
