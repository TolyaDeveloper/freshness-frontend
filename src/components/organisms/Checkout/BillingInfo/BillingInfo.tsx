import { cnb } from 'cnbuilder'
import { BillingInfo } from './BillingInfo.props'
import { Input, Label, FormStyledWrapper } from '~/components/atoms'
import { CheckoutSchema } from '~/validators/checkout.validator'

import styles from './BillingInfo.module.scss'

const BillingInfo = ({ className, register }: BillingInfo) => {
  return (
    <div className={cnb(styles.inputsWrapper, className)}>
      <div>
        <Label>First name</Label>
        <FormStyledWrapper>
          <Input
            type="text"
            {...register('firstName', CheckoutSchema.firstName)}
            placeholder="First name"
          />
        </FormStyledWrapper>
      </div>
      <div>
        <Label>Last name</Label>
        <FormStyledWrapper>
          <Input
            type="text"
            {...register('lastName', CheckoutSchema.lastName)}
            placeholder="Last name"
          />
        </FormStyledWrapper>
      </div>
      <div>
        <Label>Email address</Label>
        <FormStyledWrapper>
          <Input
            type="email"
            {...register('email', CheckoutSchema.email)}
            placeholder="Email address"
          />
        </FormStyledWrapper>
      </div>
      <div>
        <Label>Phone number</Label>
        <FormStyledWrapper>
          <Input
            type="tel"
            {...register('phone', CheckoutSchema.phone)}
            placeholder="Phone number"
          />
        </FormStyledWrapper>
      </div>
      <div>
        <Label>Address</Label>
        <FormStyledWrapper>
          <Input
            type="text"
            {...register('address', CheckoutSchema.address)}
            placeholder="Address"
          />
        </FormStyledWrapper>
      </div>
      <div>
        <Label>Town / City</Label>
        <FormStyledWrapper>
          <Input
            type="text"
            {...register('town_or_city', CheckoutSchema.town_or_city)}
            placeholder="Town or city"
          />
        </FormStyledWrapper>
      </div>
      <div>
        <Label>State / Country</Label>
        <FormStyledWrapper>
          <Input
            type="text"
            {...register('state_or_country', CheckoutSchema.state_or_country)}
            placeholder="Choose a state or Country"
          />
        </FormStyledWrapper>
      </div>
      <div>
        <Label>ZIP / Postal code</Label>
        <FormStyledWrapper>
          <Input
            type="text"
            {...register(
              'zip_or_postal_code',
              CheckoutSchema.zip_or_postal_code
            )}
            placeholder="Postal code or ZIP"
          />
        </FormStyledWrapper>
      </div>
    </div>
  )
}

export default BillingInfo
