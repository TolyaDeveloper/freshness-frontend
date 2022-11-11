import { cnb } from 'cnbuilder'
import { SmallBlogProps } from './SmallBlog.props'
import { Typography } from '~/components/atoms'
import { AuthorTimestamp } from '~/components/molecules'
import { PAGES } from '~/constants/routes'
import Link from 'next/link'
import Image from 'next/image'

import styles from './SmallBlog.module.scss'

const SmallBlog = ({
  className,
  title,
  createdBy,
  createdAt,
  postImageUri,
  _id
}: SmallBlogProps) => (
  <Link href={`${PAGES.blog}/${_id}`}>
    <a className={cnb(styles.smallBlog, className)}>
      <div className={styles.descriptionBlock}>
        <Typography className={styles.title} level="h2-sm">
          {title}
        </Typography>
        {createdBy?.avatarUri && (
          <AuthorTimestamp
            className={styles.timestamp}
            avatarUri={createdBy?.avatarUri}
            authorName={createdBy?.firstName}
            timestamp={createdAt}
          />
        )}
      </div>
      {postImageUri && (
        <Image
          className={styles.image}
          src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${postImageUri}`}
          width={190}
          height={190}
          objectFit="cover"
          alt={title}
        />
      )}
    </a>
  </Link>
)

export default SmallBlog
