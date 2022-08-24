import { LargeBlogProps } from './LargeBlog.props'
import { Typography, Avatar, Tag } from '~/components/atoms'
import Image from 'next/image'
import Link from 'next/link'

import styles from './LargeBlog.module.scss'
import { ROUTES } from '~/constants/routes'

const LargeBlog = ({
  _id,
  tags,
  title,
  postImageUri,
  createdBy,
  createdAt
}: LargeBlogProps) => {
  return (
    <article className={styles.largeBlog}>
      {tags.length && (
        <div className={styles.tagsList}>
          {tags.map(({ _id, name, slug }) => (
            <Tag key={_id} href={`${ROUTES.tags}/${slug}`}>
              {name}
            </Tag>
          ))}
        </div>
      )}
      <Link href={`${ROUTES.blog}/${_id}`}>
        <a>
          <div className={styles.darken} />
          <Image
            className={styles.postImage}
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${postImageUri}`}
            alt={title}
          />
          <div className={styles.descriptionBlock}>
            <Typography color="primary1" level="h2-lg">
              {title}
            </Typography>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default LargeBlog
