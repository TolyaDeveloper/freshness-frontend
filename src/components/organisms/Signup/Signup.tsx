import { ChangeEvent, useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  CustomLink,
  FormStyledWrapper,
  Input,
  Label,
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
import Link from 'next/link'

import styles from './Signup.module.scss'

const Signup = () => {
  const { dispatch } = useUserContext()
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewFile, setPreviewFile] = useState<string | null>(null)
  const { handleSubmit, register } = useForm<SignupSchemaType>({
    resolver: computedTypesResolver(signupSchema)
  })

  useEffect(() => {
    if (!uploadedFile) {
      return setPreviewFile(null)
    }

    const objectUrl = URL.createObjectURL(uploadedFile)

    setPreviewFile(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [uploadedFile])

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password
  }: SignupSchemaType) => {
    try {
      const res = await AuthService.signup({
        firstName,
        lastName,
        email,
        password,
        uploadedFile
      })

      LocalStorageService.setItem('accessToken', res.data.accessToken)
      dispatch({ type: 'SET_USER', payload: res.data.user })
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    setUploadedFile(files && files[0])
  }

  const handleRemoveFile = () => {
    setUploadedFile(null)
  }

  return (
    <>
      <Typography className={styles.title} level="h2-lg">
        Signup
      </Typography>
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
        <Label className={styles.label}>
          Optional (5mb max)
          <input
            className={styles.fileUploader}
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileUpload}
          />
          <Button className={styles.uploadButton} type="button" tabIndex={-1}>
            Upload avatar
          </Button>
        </Label>
        {previewFile && (
          <Button
            className={styles.removeAvatarButton}
            variant="plain"
            type="button"
            onClick={handleRemoveFile}
          >
            Remove avatar
          </Button>
        )}
        {previewFile && (
          <div className={styles.avatarPreviewWrapper}>
            <Avatar
              src={previewFile}
              width={100}
              height={100}
              objectFit="cover"
              alt="preview"
            />
          </div>
        )}

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
