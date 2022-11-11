import { useForm } from 'react-hook-form'
import { Button, FormStyledWrapper, Input } from '~/components/atoms'
import { ICommentFields, CommentSchema } from '~/validators/comment.validator'
import { CommentsFormProps } from './CommentsForm.props'
import { useUserContext } from '~/context/UserContext/User.context'
import userService from '~/services/user.service'

import styles from './CommentsForm.module.scss'

const CommentsForm = ({ className, productId, onSent }: CommentsFormProps) => {
  const { state } = useUserContext()

  const { handleSubmit, register, reset } = useForm<ICommentFields>()

  const onSubmit = async (data: ICommentFields) => {
    try {
      await userService.addProductReview({ comment: data.message, productId })

      reset()
      onSent()
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message)
      }
    }
  }

  return (
    <form
      className={className}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormStyledWrapper className={styles.formWrapper}>
        <Input
          placeholder={
            !state.isAuthenticated
              ? ' You must login to leave a comment!'
              : 'Leave your comment...'
          }
          {...register('message', CommentSchema.message)}
          disabled={Boolean(!state.isAuthenticated)}
        />
        <Button size="sm" disabled={Boolean(!state.isAuthenticated)}>
          Submit
        </Button>
      </FormStyledWrapper>
    </form>
  )
}

export default CommentsForm
