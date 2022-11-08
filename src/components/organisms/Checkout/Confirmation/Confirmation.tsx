import { ConfirmationProps } from './Confirmation.props'
import { FormStyledWrapper, Checkbox } from '~/components/atoms'
import { CheckoutSchema } from '~/validators/checkout.validator'

import styles from './Confirmation.module.scss'

const Confirmation = ({ className, register, errors }: ConfirmationProps) => {
  return (
    <div className={className}>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Checkbox
          label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
          {...register('mail_subscription', CheckoutSchema.mail_subscription)}
        />
      </FormStyledWrapper>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Checkbox
          label="I agree with our terms and conditions and privacy policy."
          error={errors.is_policy_accepted}
          {...register('is_policy_accepted', CheckoutSchema.is_policy_accepted)}
        />
      </FormStyledWrapper>
    </div>
  )
}

export default Confirmation
