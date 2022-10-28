import Schema, { string, Type } from 'computed-types'

export const editProfileSchema = Schema({
  firstName: string.trim().min(1),
  lastName: string.trim().min(1)
})

export type EditProfileSchemaType = Type<typeof editProfileSchema>
