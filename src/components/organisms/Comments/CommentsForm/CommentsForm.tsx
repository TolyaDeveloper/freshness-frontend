import { computedTypesResolver } from '@hookform/resolvers/computed-types'
import { useForm } from 'react-hook-form'
import { Button, FormStyledWrapper, Input } from '~/components/atoms'
import {
  commentSchema,
  CommentSchemaType
} from '~/validators/comment.validator'
import { CommentsFormProps } from './CommentsForm.props'
import { useUserContext } from '~/context/UserContext/User.context'

import styles from './CommentsForm.module.scss'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'

const CommentsForm = ({ className, productId }: CommentsFormProps) => {
  const { state } = useUserContext()

  const { handleSubmit, register, reset } = useForm<CommentSchemaType>({
    resolver: computedTypesResolver(commentSchema)
  })

  const onSubmit = async (data: CommentSchemaType) => {
    try {
      await $api.post(ROUTES.add_product_review, {
        comment: data.message,
        productId
      })

      reset()
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
            !state.user
              ? ' You must login to leave a comment!'
              : 'Leave your comment...'
          }
          {...register('message')}
          disabled={Boolean(!state.user)}
        />
        <Button size="sm" disabled={Boolean(!state.user)}>
          Submit
        </Button>
      </FormStyledWrapper>
    </form>
  )
}

export default CommentsForm
