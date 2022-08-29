import { cnb } from 'cnbuilder'
import { MediumBlogProps } from './MediumBlog.props'
import { Tag, Typography } from '~/components/atoms'
import { AuthorTimestamp } from '~/components/molecules'
import { ROUTES } from '~/constants/routes'
import Image from 'next/image'
import Link from 'next/link'

import styles from './MediumBlog.module.scss'

const MediumBlog = ({
  className,
  postImageUri,
  createdBy,
  createdAt,
  tags,
  title,
  _id
}: MediumBlogProps) => {
  return (
    <Link href={`${ROUTES.blog}/${_id}`}>
      <a className={cnb(styles.mediumBlog, className)}>
        {postImageUri && (
          <Image
            className={styles.image}
            src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${postImageUri}`}
            width={270}
            objectFit="cover"
            height={180}
            alt={title}
          />
        )}
        {tags && (
          <div className={styles.tagsList}>
            {tags.map(({ _id, name }) => (
              <Tag key={_id}>{name}</Tag>
            ))}
          </div>
        )}
        <Typography className={styles.title} level="h2-md">
          {title}
        </Typography>
        {createdBy?.avatarUri && (
          <AuthorTimestamp
            className={styles.authorTimestamp}
            avatarUri={createdBy?.avatarUri}
            authorName={createdBy?.firstName}
            timestamp={createdAt}
          />
        )}
      </a>
    </Link>
  )
}

export default MediumBlog
