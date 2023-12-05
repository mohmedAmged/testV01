import React from 'react'
import './discoverHome.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import DiscoverAdsCateg from '../../components/discoverAdsCategories/DiscoverAdsCateg'
import DiscoverAdsLocation from '../../components/discoverAdsLocation/DiscoverAdsLocation'
import DiscoverAdsFilter from '../../components/discoverAdsFilter/DiscoverAdsFilter'
export default function DiscoverHome() {
  return (
    <div>
      <DynamicHero />
      <DiscoverAdsCateg />
      <DiscoverAdsLocation />
      <DiscoverAdsFilter />
    </div>
  )
}
