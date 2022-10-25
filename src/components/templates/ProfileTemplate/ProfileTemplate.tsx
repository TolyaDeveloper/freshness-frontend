import { ProfileTemplateProps } from './ProfileTemplate.props'
import { ProfileData } from '~/components/organisms'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

const ProfileTemplate = ({}: ProfileTemplateProps) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Profile data</Tab>
          <Tab>Wishlist</Tab>
          <Tab>Compare list</Tab>
        </TabList>
        <TabPanel>
          <ProfileData />
        </TabPanel>
        <TabPanel>
          <h2>Wishlist</h2>
        </TabPanel>
        <TabPanel>
          <h2>Compare list</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ProfileTemplate
