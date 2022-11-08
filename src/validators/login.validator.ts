import { RegisterOptions } from 'react-hook-form'
import { REGEXPS } from '~/constants/regexps'
import { trimValidate } from '~/utils/trim-validate'

export interface ILoginFields {
  email: string
  password: string
}

export const LoginSchema: Record<keyof ILoginFields, RegisterOptions> = {
  email: {
    required: 'Email is required',
    pattern: {
      value: REGEXPS.email,
      message: 'Email should be of type example@gmail.com'
    },
    validate: trimValidate
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password should contain at least 8 characters'
    }
  }
}
