import { cnb } from 'cnbuilder'
import { useRouter } from 'next/router'
import { AuthorTimestampProps } from './AuthorTimestamp.props'
import { Avatar, Typography } from '~/components/atoms'

import styles from './AuthorTimestamp.module.scss'

const AuthorTimestamp = ({
  avatarUri,
  authorName,
  timestamp,
  className,
  color = 'primary2'
}: AuthorTimestampProps) => {
  const { locale } = useRouter()

  return (
    <div className={cnb(styles.authorTimestamp, className)}>
      <Avatar
        className={styles.avatar}
        src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${avatarUri}`}
        width={32}
        height={32}
        alt={authorName}
      />
      <Typography
        className={cnb(styles.authorName, styles[color])}
        level="body6"
        color="primary1"
      >
        {authorName}
      </Typography>
      <Typography className={cnb(styles[color])} level="body6" color="primary1">
        {new Intl.DateTimeFormat(locale).format(new Date(timestamp))}
      </Typography>
    </div>
  )
}

export default AuthorTimestamp
