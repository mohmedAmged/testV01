import React, { useEffect, useState } from 'react'
import './userDashboard.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import DynamicMapWeb from '../../components/dynamicMapWeb/DynamicMapWeb'
import UserProfileSec from '../../components/userProfileSec/UserProfileSec';
import Loader from '../../components/loader/Loader';
import { currCountryCode, getUserData } from '../../functions/BaseURL';
export default function UserDashBoard({token, countriesData}) {
  const [userData, setUserData] = useState([])
  const links = [
      { "label": 'Home', "route": `/${currCountryCode}` },
      { "label": 'Dashboard', "route": `/${currCountryCode}/user/dashboard` },
  ];

  const [showContent, setShowContent] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(false);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [showContent]);

  useEffect(() => {
    const fetchUserData = () => {
      if (!token) {
        console.error('Token is missing');
        return;
      }
      getUserData(token)
        .then((response) => {
          setUserData(response); 
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <>
    {
      (showContent) ?
        <Loader />
      :
        <div className='userDashBoard__handler'>
          <DynamicHero title="Dashbord"/>
          <DynamicMapWeb links={links}/>
          <UserProfileSec countriesData={countriesData} userData={userData}/>
        </div>
    }
    </>
  )
}
