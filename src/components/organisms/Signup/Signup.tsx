import {
  Button,
  CustomLink,
  FormStyledWrapper,
  Input,
  Typography
} from '~/components/atoms'
import {
  type SignupSchemaType,
  signupSchema
} from '~/validators/signup.validator'
import { computedTypesResolver } from '@hookform/resolvers/computed-types'
import { useForm } from 'react-hook-form'
import { useUserContext } from '~/context/UserContext/User.context'
import { useRouter } from 'next/router'

import styles from './Signup.module.scss'
import { ROUTES } from '~/constants/routes'
import Link from 'next/link'

const Signup = () => {
  const { state } = useUserContext()
  const { push } = useRouter()
  const { handleSubmit, register } = useForm<SignupSchemaType>({
    resolver: computedTypesResolver(signupSchema)
  })

  const onSubmit = async (creds: SignupSchemaType) => {
    console.log(creds)
  }

  if (state.user) {
    push(ROUTES.profile)
  }

  return (
    <>
      <Typography className={styles.title} level="h2-lg">
        Signup
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="text"
            placeholder="First name..."
            {...register('firstName')}
          />
        </FormStyledWrapper>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="text"
            placeholder="Last name..."
            {...register('lastName')}
          />
        </FormStyledWrapper>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input type="email" placeholder="Email..." {...register('email')} />
        </FormStyledWrapper>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="password"
            placeholder="Password..."
            {...register('password')}
          />
        </FormStyledWrapper>
        <Button type="submit">Signup</Button>
      </form>
      <Link href={ROUTES.profile} passHref>
        <CustomLink className={styles.loginLink}>
          Already have an account? Log in here
        </CustomLink>
      </Link>
    </>
  )
}

export default Signup
