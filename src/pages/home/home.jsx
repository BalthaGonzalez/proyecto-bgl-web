import Maincontainer from '../../components/maincontainer/maincontainer'
import Header from '../../components/header/header'
import Profile from '../../components/profile/profile'
import Biography from '../../components/biography/biography'

import './_home.scss';

export const Home = () => {
  return (
    <Maincontainer>
      <Header />
      <Profile />
      {/* <Biography /> */}
    </Maincontainer>
  )
}