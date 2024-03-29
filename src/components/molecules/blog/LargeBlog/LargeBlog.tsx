import { cnb } from 'cnbuilder'
import { LargeBlogProps } from './LargeBlog.props'
import { Typography, Tag } from '~/components/atoms'
import { AuthorTimestamp } from '~/components/molecules'
import { PAGES } from '~/constants/routes'
import Image from 'next/image'
import Link from 'next/link'

import styles from './LargeBlog.module.scss'

const LargeBlog = ({
  className,
  _id,
  tags,
  title,
  postImageUri,
  createdBy,
  createdAt
}: LargeBlogProps) => (
  <Link href={`${PAGES.blog}/${_id}`}>
    <a className={cnb(styles.largeBlog, className)}>
      {tags && (
        <div className={styles.tagsList}>
          {tags.map(({ _id, name }) => (
            <Tag key={_id}>{name}</Tag>
          ))}
        </div>
      )}
      <div className={styles.darken} />
      {postImageUri && (
        <Image
          className={styles.postImage}
          layout="fill"
          objectFit="cover"
          src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${postImageUri}`}
          alt={title}
        />
      )}
      <div className={styles.descriptionBlock}>
        <Typography className={styles.title} color="primary1" level="h2-lg">
          {title}
        </Typography>
        {createdBy?.avatarUri && (
          <AuthorTimestamp
            avatarUri={createdBy?.avatarUri}
            authorName={createdBy?.firstName}
            timestamp={createdAt}
            color="primary1"
          />
        )}
      </div>
    </a>
  </Link>
)

export default LargeBlog
