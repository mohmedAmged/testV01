import React from 'react'
import './singleProductPage.css'
import SingleProductSec from '../../components/singleProductSec/SingleProductSec'
import heroBg from '../../assets/dynamicHeroImgs/Conv.png'
import DynamicHeroSec from '../../components/dynamicHeroSec/DynamicHeroSec'
export default function SingleProductPage() {
  return (
    <div>
     {/* <DynamicHeroSec backgroundImage={heroBg} title="NEW BMW 3 SERIES" content="NEW BMW 3 SERIES"/> */}
    <SingleProductSec />  
    </div>
  )
}
