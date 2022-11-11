import { RegisterOptions } from 'react-hook-form'
import { REGEXPS } from '~/constants/regexps'
import { trimValidate } from '~/utils/trim-validate'
import { PAYMENT_METHODS } from '~/interfaces/payment.enum'

export interface ICheckoutFields {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  town_or_city: string
  state_or_country: string
  zip_or_postal_code: string | number
  payment_method: PAYMENT_METHODS
  additionalInformation: string
  mail_subscription: boolean
  is_policy_accepted: boolean
}

export const CheckoutSchema: Record<keyof ICheckoutFields, RegisterOptions> = {
  firstName: { required: 'First name is required', validate: trimValidate },
  lastName: { required: 'Last name is required', validate: trimValidate },
  email: {
    required: 'Email should be of type example@gmail.com',
    pattern: REGEXPS.email,
    validate: trimValidate
  },
  phone: { required: 'Phone is required', validate: trimValidate },
  address: { required: 'Address is required', validate: trimValidate },
  town_or_city: {
    required: 'Town or city is required',
    validate: trimValidate
  },
  state_or_country: {
    required: 'State or country is required',
    validate: trimValidate
  },
  zip_or_postal_code: {
    required: 'Zip or postal code is required',
    validate: trimValidate
  },
  payment_method: { required: 'Choose payment method' },
  additionalInformation: { required: false },
  mail_subscription: { required: false },
  is_policy_accepted: { required: 'Apply our terms' }
}
