import React from 'react'
import HeroSec from '../../components/myHeroSec/HeroSec'
import './myHome.css'
import MainTypeSec from '../../components/mainTypesSec/MainTypeSec'
import CarInterestSec from '../../components/carInterestSec/CarInterestSec'
import BrowseMakeSec from '../../components/browseMakeSec/BrowseMakeSec'
import EcoRideSec from '../../components/ecoRidesSec/EcoRideSec'
import RecentSec from '../../components/recentSec/RecentSec'
import BriefAboutUs from '../../components/briefAboutUs/BriefAboutUs'
export default function MyHome() {
  return (
    <div className='test'>
      <HeroSec/>
      <MainTypeSec/>
      <CarInterestSec />
      <BrowseMakeSec />
      <EcoRideSec />
      <RecentSec />
      <BriefAboutUs />
    </div>
  )
}
