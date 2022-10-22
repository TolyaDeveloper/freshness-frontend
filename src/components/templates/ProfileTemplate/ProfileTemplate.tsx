import { ProfileTemplateProps } from './ProfileTemplate.props'
import withAuth from '~/hocs/withAuth'

const ProfileTemplate = ({}: ProfileTemplateProps) => {
  return <div>ProfileTemplate</div>
}

export default withAuth(ProfileTemplate)
