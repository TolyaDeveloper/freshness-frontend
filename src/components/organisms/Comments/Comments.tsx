import { Typography } from '~/components/atoms'
import { CommentsProps } from './Comments.props'
import { IProductComment } from '~/interfaces/product-comment.interface'
import useSWR from 'swr'

import styles from './Comments.module.scss'
import { ROUTES } from '~/constants/routes'

const Comments = ({ commentsForm, productId }: CommentsProps) => {
  const { data } = useSWR<IProductComment>(
    `${ROUTES.products_comments}/${productId}`
  )

  console.log(data)

  return (
    <>
      {commentsForm && (
        <>
          <Typography className={styles.formTitle} level="h3">
            Write your review
          </Typography>
          {commentsForm}
        </>
      )}
      {data?.reviews.map(({ _id, comment, createdAt, user }) => (
        <div key={_id}>
          <>
            {comment}
            {new Date(createdAt).toLocaleTimeString()}
            {user?.firstName}
            {user?.lastName}
          </>
        </div>
      ))}
    </>
  )
}

export default Comments
