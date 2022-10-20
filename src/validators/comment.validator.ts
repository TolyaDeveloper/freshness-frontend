import Schema, { string, Type } from 'computed-types'

export const commentSchema = Schema({
  message: string.trim().min(1)
})

export type CommentSchemaType = Type<typeof commentSchema>
