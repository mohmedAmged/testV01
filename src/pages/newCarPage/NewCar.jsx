import React from 'react'
import './newCar.css'
import DynamicHeroSec from '../../components/dynamicHeroSec/DynamicHeroSec'
import heroBg from '../../assets/dynamicHeroImgs/Conv.png'
import ShopSec from '../../components/shopSec/ShopSec'
export default function NewCar() {
  return (
    <div>
      <DynamicHeroSec backgroundImage={heroBg} title="New Cars" content="New cars"/>
      <ShopSec />
    </div>
  )
}
