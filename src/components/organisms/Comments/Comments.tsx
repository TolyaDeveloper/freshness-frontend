import { Typography, Skeleton } from '~/components/atoms'
import { AuthorTimestamp } from '~/components/molecules'
import { CommentsProps } from './Comments.props'
import { IProductComment } from '~/interfaces/product-comment.interface'
import { ROUTES } from '~/constants/routes'
import { DEFAULT_AVATAR_PATH } from '~/constants/common'
import CommentsForm from './CommentsForm/CommentsForm'
import useSWR from 'swr'

import styles from './Comments.module.scss'

const Comments = ({ productId }: CommentsProps) => {
  const { data: comments, mutate } = useSWR<IProductComment>(
    `${ROUTES.products_comments}/${productId}`
  )

  const commentsView = !comments ? (
    <>
      <Skeleton variant="text" />
    </>
  ) : (
    comments.reviews.map(({ _id, comment, createdAt, user }) => (
      <div className={styles.comment} key={_id}>
        {!user ? (
          <AuthorTimestamp
            authorName="User deleted"
            avatarUri={DEFAULT_AVATAR_PATH}
            timestamp={createdAt}
          />
        ) : (
          <AuthorTimestamp
            authorName={`${user.firstName} ${user.lastName}`}
            avatarUri={user.avatarUri}
            timestamp={createdAt}
          />
        )}

        <Typography className={styles.userMessage} level="body5">
          {comment}
        </Typography>
      </div>
    ))
  )

  const onCommentSent = () => mutate()

  const commentsNotFound = comments?.reviews.length === 0 && (
    <Typography className={styles.noComments} level="body3">
      No reviews found
    </Typography>
  )

  return (
    <>
      <Typography className={styles.formTitle} level="h3">
        Write your review
      </Typography>
      <CommentsForm productId={productId} onSent={onCommentSent} />
      {commentsView}
      {commentsNotFound}
    </>
  )
}

export default Comments
