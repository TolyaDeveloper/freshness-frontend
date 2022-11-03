import { UseFormRegister } from 'react-hook-form'
import { CheckoutSchemaType } from '~/validators/checkout.validator'

export interface BillingInfo {
  register: UseFormRegister<CheckoutSchemaType>
  className?: string
}
