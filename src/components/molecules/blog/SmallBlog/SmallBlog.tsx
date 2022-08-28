import { cnb } from 'cnbuilder'
import { SmallBlogProps } from './SmallBlog.props'
import { Typography } from '~/components/atoms'
import { AuthorTimestamp } from '~/components/molecules'
import { ROUTES } from '~/constants/routes'
import Link from 'next/link'
import Image from 'next/image'

import styles from './SmallBlog.module.scss'

const SmallBlog = ({
  title,
  createdBy,
  createdAt,
  postImageUri,
  _id,
  className
}: SmallBlogProps) => {
  return (
    <Link href={`${ROUTES.blog}/${_id}`}>
      <a className={cnb(styles.smallBlog, className)}>
        <div className={styles.descriptionBlock}>
          <Typography level="h2-sm">{title}</Typography>
          <AuthorTimestamp
            className={styles.timestamp}
            avatarUri={createdBy.avatarUri}
            authorName={createdBy?.firstName}
            timestamp={createdAt}
          />
        </div>
        {postImageUri && (
          <Image
            className={styles.image}
            src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${postImageUri}`}
            width={96}
            height={96}
            objectFit="cover"
            alt={title}
          />
        )}
      </a>
    </Link>
  )
}

export default SmallBlog
