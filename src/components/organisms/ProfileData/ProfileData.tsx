import { ProfileDataProps } from './ProfileData.props'
import {
  Button,
  Input,
  FormStyledWrapper,
  Label,
  Avatar
} from '~/components/atoms'
import { AuthService } from '~/services/auth.service'
import { LocalStorageService } from '~/services/localStorage.service'
import { useUserContext } from '~/context/UserContext/User.context'

import styles from './ProfileData.module.scss'

const ProfileData = ({}: ProfileDataProps) => {
  const {
    state: { user },
    dispatch
  } = useUserContext()

  const handleLogout = async () => {
    await AuthService.logout()

    dispatch({ type: 'SET_USER', payload: null })
    LocalStorageService.removeItem('accessToken')
  }

  if (!user) {
    return <h1>Loading...</h1>
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
        <Input value={user.firstName} readOnly />
      </FormStyledWrapper>
      <Label className={styles.label}>Last name</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input value={user.lastName} readOnly />
      </FormStyledWrapper>
      <Label className={styles.label}>Email</Label>
      <FormStyledWrapper className={styles.formStyledWrapper}>
        <Input value={user.email} readOnly />
      </FormStyledWrapper>
      <Button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </Button>
    </>
  )
}

export default ProfileData
