import { RegisterOptions } from 'react-hook-form'

export interface ISearchFields {
  category: string
  search: string
}

export const LoginSchema: Record<keyof ISearchFields, RegisterOptions> = {
  category: {},
  search: { required: true, minLength: 1 }
}
