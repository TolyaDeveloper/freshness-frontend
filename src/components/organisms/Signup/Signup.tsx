import { useState } from 'react'
import {
  Button,
  CustomLink,
  FormStyledWrapper,
  Input,
  Typography
} from '~/components/atoms'
import { ISignupFields, SignupSchema } from '~/validators/signup.validator'
import { useForm } from 'react-hook-form'
import { PAGES } from '~/constants/routes'
import { useUserContext } from '~/context/UserContext/User.context'
import { AuthService } from '~/services/auth.service'
import { LocalStorageService } from '~/services/localStorage.service'
import { AxiosError } from 'axios'
import { LOCAL_STORAGE_KEYS } from '~/constants/common'
import Link from 'next/link'

import styles from './Signup.module.scss'

const Signup = () => {
  const [error, setError] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const { dispatch } = useUserContext()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<ISignupFields>()

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password
  }: ISignupFields) => {
    setLoading(true)

    try {
      const { data } = await AuthService.signup({
        firstName,
        lastName,
        email,
        password
      })

      LocalStorageService.setItem(
        LOCAL_STORAGE_KEYS.accessToken,
        data.accessToken
      )

      dispatch({ type: 'SET_USER', payload: data.user })
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
            {...register('firstName', SignupSchema.firstName)}
            error={errors.firstName}
          />
        </FormStyledWrapper>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="text"
            placeholder="Last name..."
            {...register('lastName', SignupSchema.lastName)}
            error={errors.lastName}
          />
        </FormStyledWrapper>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="email"
            placeholder="Email..."
            {...register('email', SignupSchema.email)}
            error={errors.email}
          />
        </FormStyledWrapper>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="password"
            placeholder="Password..."
            {...register('password', SignupSchema.password)}
            error={errors.password}
          />
        </FormStyledWrapper>

        <Button type="submit" disabled={isLoading}>
          Signup
        </Button>
      </form>
      <Link href={PAGES.profile} passHref>
        <CustomLink className={styles.loginLink}>
          Already have an account? Log in here
        </CustomLink>
      </Link>
    </>
  )
}

export default Signup
