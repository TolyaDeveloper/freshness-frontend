import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { ICheckoutFields } from '~/validators/checkout.validator'

export interface ConfirmationProps {
  register: UseFormRegister<ICheckoutFields>
  errors: FieldErrorsImpl<ICheckoutFields>
  className?: string
}
