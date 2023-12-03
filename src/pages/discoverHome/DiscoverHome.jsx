import React from 'react'
import './discoverHome.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import DiscoverAdsCateg from '../../components/discoverAdsCategories/DiscoverAdsCateg'
export default function DiscoverHome() {
  return (
    <div>
      <DynamicHero />
      <DiscoverAdsCateg />
    </div>
  )
}
