import React from 'react'
import './userDashboard.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import DynamicMapWeb from '../../components/dynamicMapWeb/DynamicMapWeb'
import UserProfileSec from '../../components/userProfileSec/UserProfileSec';
export default function UserDashBoard() {
    const links = [
        { "label": 'Home', "route": '/' },
        { "label": 'Dashboard', "route": '/user/dashboard' },
    ];
  return (
    <div className='userDashBoard__handler'>
      <DynamicHero title="Dashbord"/>
      <DynamicMapWeb links={links}/>
      <UserProfileSec />
    </div>
  )
}
