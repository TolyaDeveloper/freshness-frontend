import { RegisterOptions } from 'react-hook-form'

export interface IEditProfileFields {
  firstName: string
  lastName: string
}

export const EditProfileSchema: Record<
  keyof IEditProfileFields,
  RegisterOptions
> = {
  firstName: { required: true, minLength: 1 },
  lastName: { required: true, minLength: 1 }
}
