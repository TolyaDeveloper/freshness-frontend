import { useState } from 'react'
import { LoginProps } from './Login.props'
import {
  Typography,
  Input,
  FormStyledWrapper,
  Button,
  CustomLink
} from '~/components/atoms'
import { useForm } from 'react-hook-form'
import { ILoginFields, LoginSchema } from '~/validators/login.validator'
import { useUserContext } from '~/context/UserContext/User.context'
import { AuthService } from '~/services/auth.service'
import { LocalStorageService } from '~/services/localStorage.service'
import { PAGES } from '~/constants/routes'
import { LOCAL_STORAGE_KEYS } from '~/constants/common'
import { AxiosError } from 'axios'
import Link from 'next/link'

import styles from './Login.module.scss'

const Login = ({}: LoginProps) => {
  const [error, setError] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const { dispatch } = useUserContext()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<ILoginFields>()

  const onSubmit = async ({ email, password }: ILoginFields) => {
    setLoading(true)

    try {
      const { data } = await AuthService.login({ email, password })

      LocalStorageService.setItem(
        LOCAL_STORAGE_KEYS.accessToken,
        data.accessToken
      )

      dispatch({ type: 'SET_USER', payload: data.user })
      dispatch({ type: 'SET_AUTH', payload: true })

      reset()
      setError('')
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
        Login
      </Typography>
      {error && (
        <Typography className={styles.errorText} level="body5" color="error">
          {error}
        </Typography>
      )}
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="email"
            placeholder="Email..."
            {...register('email', LoginSchema.email)}
            error={errors.email}
          />
        </FormStyledWrapper>
        <FormStyledWrapper className={styles.formStyledWrapper}>
          <Input
            type="password"
            placeholder="Password..."
            {...register('password', LoginSchema.password)}
            error={errors.password}
          />
        </FormStyledWrapper>
        <Button type="submit" disabled={isLoading}>
          Login
        </Button>
        <Link href={PAGES.signup} passHref>
          <CustomLink className={styles.signupLink}>
            Do not have an account? Signup here
          </CustomLink>
        </Link>
      </form>
    </>
  )
}

export default Login
