import Schema, { string, Type } from 'computed-types'
import { REGEXPS } from '~/constants/regexps'

export const loginSchema = Schema({
  email: REGEXPS.email,
  password: string.min(8).error('Password should be minimum 8 characters')
})

export type LoginSchemaType = Type<typeof loginSchema>
