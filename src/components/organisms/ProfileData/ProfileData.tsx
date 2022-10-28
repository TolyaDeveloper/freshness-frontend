import { useState, useEffect } from 'react'
import { ProfileDataProps } from './ProfileData.props'
import {
  Button,
  Input,
  FormStyledWrapper,
  Label,
  Avatar
} from '~/components/atoms'
import { FileUpload } from '~/components/molecules'
import { AuthService } from '~/services/auth.service'
import { LocalStorageService } from '~/services/localStorage.service'
import { useUserContext } from '~/context/UserContext/User.context'
import { initialValues } from '~/context/UserContext/User.types'
import { useForm } from 'react-hook-form'
import {
  EditProfileSchemaType,
  editProfileSchema
} from '~/validators/edit-profile.validator'
import { computedTypesResolver } from '@hookform/resolvers/computed-types'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'
import { IUser } from '~/interfaces/user.interface'
import EditIcon from '~/assets/icons/edit-field.svg'

import styles from './ProfileData.module.scss'

const ProfileData = ({}: ProfileDataProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewFile, setPreviewFile] = useState<string | null>(null)
  const {
    state: { user },
    dispatch
  } = useUserContext()
  const {
    handleSubmit,
    register,
    reset,
    formState: { isDirty }
  } = useForm<EditProfileSchemaType>({
    resolver: computedTypesResolver(editProfileSchema),
    defaultValues: { firstName: user.firstName, lastName: user.lastName }
  })

  console.log(isDirty)

  const handleLogout = async () => {
    await AuthService.logout()

    dispatch({
      type: 'SET_USER',
      payload: initialValues.user
    })
    dispatch({ type: 'SET_AUTH', payload: false })
    LocalStorageService.clear()
  }

  const handleRemoveFile = () => {
    setUploadedFile(null)
  }

  useEffect(() => {
    if (!uploadedFile) {
      return setPreviewFile(null)
    }

    const objectUrl = URL.createObjectURL(uploadedFile)

    setPreviewFile(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [uploadedFile])

  const onSubmit = async ({ firstName, lastName }: EditProfileSchemaType) => {
    try {
      const formData = new FormData()

      uploadedFile && formData.append('avatarUri', uploadedFile)
      formData.append('firstName', firstName)
      formData.append('lastName', lastName)
      formData.append('currentAvatarUri', user.avatarUri)

      const { data } = await $api.patch<IUser>(
        ROUTES.user_update_profile,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )

      dispatch({ type: 'UPDATE_USER', payload: data })
      setUploadedFile(null)

      reset({ firstName: data.firstName, lastName: data.lastName })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.avatarWrapper}>
        <Avatar
          className={styles.avatar}
          src={`${process.env.NEXT_PUBLIC_IMAGES_URI}${user.avatarUri}`}
          alt={user.firstName}
        />
      </div>

      <Label className={styles.label}>First name</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input
          {...register('firstName')}
          endAdornment={<EditIcon style={{ width: '15px', height: '15px' }} />}
        />
      </FormStyledWrapper>
      <Label className={styles.label}>Last name</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input
          {...register('lastName')}
          endAdornment={<EditIcon style={{ width: '15px', height: '15px' }} />}
        />
      </FormStyledWrapper>
      <Label className={styles.label}>Email</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input value={user.email} readOnly />
      </FormStyledWrapper>
      <Label className={styles.label}>Status</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input
          value={
            user.isActivated ? 'Account activated' : 'Account not activated'
          }
          readOnly
        />
      </FormStyledWrapper>
      <FileUpload
        className={styles.fileUpload}
        onChange={file => setUploadedFile(file)}
        additionalLabel="Optional (5mb max)"
        uploadLabel="Upload new avatar"
      />
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
      <form
        className={styles.buttonGroup}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Button onClick={handleLogout} type="button">
          Logout
        </Button>
        {(isDirty || uploadedFile) && (
          <Button variant="outlined" type="submit">
            Apply changes
          </Button>
        )}
      </form>
    </>
  )
}

export default ProfileData
