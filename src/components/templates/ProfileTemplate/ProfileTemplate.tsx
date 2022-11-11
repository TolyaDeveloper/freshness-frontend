import {
  Login,
  ProfileData,
  Wishlist,
  CompareList,
  OrdersHistory
} from '~/components/organisms'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import { useUserContext } from '~/context/UserContext/User.context'

const ProfileTemplate = () => {
  const { state } = useUserContext()

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Profile data</Tab>
          <Tab>Wishlist</Tab>
          <Tab>Compare list</Tab>
          <Tab>Orders history</Tab>
        </TabList>
        <TabPanel>
          {!state.isAuthenticated ? <Login /> : <ProfileData />}
        </TabPanel>
        <TabPanel>
          <Wishlist />
        </TabPanel>
        <TabPanel>
          <CompareList />
        </TabPanel>
        <TabPanel>
          {!state.isAuthenticated ? <Login /> : <OrdersHistory />}
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default ProfileTemplate
