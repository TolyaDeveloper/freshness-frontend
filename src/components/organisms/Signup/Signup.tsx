import { useState } from 'react'
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
import { ROUTES } from '~/constants/routes'
import { useUserContext } from '~/context/UserContext/User.context'
import { AuthService } from '~/services/auth.service'
import { LocalStorageService } from '~/services/localStorage.service'
import { AxiosError } from 'axios'
import Link from 'next/link'

import styles from './Signup.module.scss'

const Signup = () => {
  const [error, setError] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const { dispatch } = useUserContext()
  const { handleSubmit, register } = useForm<SignupSchemaType>({
    resolver: computedTypesResolver(signupSchema)
  })

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password
  }: SignupSchemaType) => {
    setLoading(true)

    try {
      const res = await AuthService.signup({
        firstName,
        lastName,
        email,
        password
      })

      LocalStorageService.setItem('accessToken', res.data.accessToken)

      dispatch({ type: 'SET_USER', payload: res.data.user })
      dispatch({ type: 'SET_AUTH', payload: true })
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Typography className={styles.title} level="h2-lg">
        Signup
      </Typography>
      {error && (
        <Typography className={styles.errorText} level="body5" color="error">
          {error}
        </Typography>
      )}
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
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

        <Button type="submit" disabled={isLoading}>
          Signup
        </Button>
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
