import React, { useEffect, useState } from 'react'
import './userDashboard.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import DynamicMapWeb from '../../components/dynamicMapWeb/DynamicMapWeb'
import UserProfileSec from '../../components/userProfileSec/UserProfileSec';
import Loader from '../../components/loader/Loader';
export default function UserDashBoard() {
  const links = [
      { "label": 'Home', "route": '/' },
      { "label": 'Dashboard', "route": '/user/dashboard' },
  ];

  const [showContent, setShowContent] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(false);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [showContent]);

  return (
    <>
    {
      (showContent) ?
        <Loader />
      :
        <div className='userDashBoard__handler'>
          <DynamicHero title="Dashbord"/>
          <DynamicMapWeb links={links}/>
          <UserProfileSec />
        </div>
    }
    </>
  )
}
