import { RegisterOptions } from 'react-hook-form'

export interface ICommentFields {
  message: string
}

export const CommentSchema: Record<keyof ICommentFields, RegisterOptions> = {
  message: { required: true, minLength: 1 }
}
