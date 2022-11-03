import { ConfirmationProps } from './Confirmation.props'
import { FormStyledWrapper, Checkbox } from '~/components/atoms'
import { CheckoutSchema } from '~/validators/checkout.validator'

import styles from './Confirmation.module.scss'

const Confirmation = ({ className, register }: ConfirmationProps) => {
  return (
    <div className={className}>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Checkbox
          label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
          {...register('resending', CheckoutSchema.resending)}
        />
      </FormStyledWrapper>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Checkbox
          label="I agree with our terms and conditions and privacy policy."
          {...register('terms', CheckoutSchema.terms)}
        />
      </FormStyledWrapper>
    </div>
  )
}

export default Confirmation
