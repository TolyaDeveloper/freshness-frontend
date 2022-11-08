import {
  FieldErrors,
  UseFormRegister,
  FieldError,
  FieldErrorsImpl
} from 'react-hook-form'
import { ICheckoutFields } from '~/validators/checkout.validator'

export interface BillingInfo {
  register: UseFormRegister<ICheckoutFields>
  errors: FieldErrorsImpl<ICheckoutFields>
  className?: string
}
