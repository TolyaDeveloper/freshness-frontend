import Schema, { string, Type } from 'computed-types'

export const searchSchema = Schema({
  category: string,
  search: string.trim().min(1)
})

export type SearchSchemaType = Type<typeof searchSchema>
