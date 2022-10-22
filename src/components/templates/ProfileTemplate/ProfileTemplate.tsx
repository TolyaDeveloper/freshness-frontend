import { ProfileTemplateProps } from './ProfileTemplate.props'
import { Button } from '~/components/atoms'
import { useAppContext } from '~/context/AppContext/App.context'
import { LocalStorageService } from '~/services/localStorage.service'
import { AuthService } from '~/services/auth.service'
import withAuth from '~/hocs/withAuth'

const ProfileTemplate = ({}: ProfileTemplateProps) => {
  const { dispatch } = useAppContext()

  const handleLogout = async () => {
    await AuthService.logout()

    dispatch({ type: 'SET_USER', payload: null })
    LocalStorageService.removeItem('accessToken')
  }

  return (
    <div>
      ProfileTemplate<Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default withAuth(ProfileTemplate)
