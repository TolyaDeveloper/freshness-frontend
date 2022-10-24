import Schema, { string, Type } from 'computed-types'

export const signupSchema = Schema({
  firstName: string.trim().min(1),
  lastName: string.trim().min(1),
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: string.min(8).error('Password should be minimum 8 characters')
})

export type SignupSchemaType = Type<typeof signupSchema>
