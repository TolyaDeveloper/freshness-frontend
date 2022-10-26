import { ProfileTemplateProps } from './ProfileTemplate.props'
import { Login, ProfileData, Wishlist } from '~/components/organisms'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import { useUserContext } from '~/context/UserContext/User.context'

const ProfileTemplate = ({}: ProfileTemplateProps) => {
  const { state } = useUserContext()

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Profile data</Tab>
          <Tab>Wishlist</Tab>
          <Tab>Compare list</Tab>
        </TabList>
        <TabPanel>
          {!state.isAuthenticated ? <Login /> : <ProfileData />}
        </TabPanel>
        <TabPanel>
          <Wishlist />
        </TabPanel>
        <TabPanel>
          <h2>Compare list</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ProfileTemplate
