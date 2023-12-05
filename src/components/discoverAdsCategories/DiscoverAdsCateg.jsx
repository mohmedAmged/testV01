import React from 'react'
import './discoverAdsCateg.css'
import CategoryCard from '../categoryCard/CategoryCard'
import cardImg from '../../assets/discoverHomeImg/sedan.png'
import food from '../../assets/discoverHomeImg/food.jpg'
import fashion from '../../assets/discoverHomeImg/fashion.jpg'
import health from '../../assets/discoverHomeImg/health.jpg'
import makeup from '../../assets/discoverHomeImg/makeup.jpg'
import electronic from '../../assets/discoverHomeImg/electronic.jpg'
const cardsItems = [
  {
    "title" : "cars",
    "subtit": "0  Ads posted",
    "list": [
      'Auto Parts',
      'Auto Parts',
      'Auto Parts'
    ],
    "icon": "bi bi-car-front",
    "image" : cardImg
  },
  {
    "title" : "food",
    "subtit": "0  Ads posted",
    "list": [
      'Auto Parts',
      'Auto Parts',
      'Auto Parts'
    ],
    "icon": "bi bi-basket2",
    "image" : food
  },
  {
    "title" : "fashion",
    "subtit": "0",
    "list": [
      'Auto Parts',
      'Auto Parts',
      'Auto Parts'
    ],
    "icon": "bi bi-smartwatch",
    "image" : fashion
  },
  {
    "title" : "health",
    "subtit": "0",
    "list": [
      'Auto Parts',
      'Auto Parts',
      'Auto Parts'
    ],
    "icon": "bi bi-bicycle",
    "image" : health
  },
  {
    "title" : "makeup",
    "subtit": "0",
    "list": [
      'Auto Parts',
      'Auto Parts',
      'Auto Parts'
    ],
    "icon": "bi bi-brush-fill",
    "image" : makeup
  },
  {
    "title" : "electronics",
    "subtit": "0",
    "list": [
      'Auto Parts',
      'Auto Parts',
      'Auto Parts'
    ],
    "icon": "bi bi-android2",
    "image" : electronic
  },
  
  
]
export default function DiscoverAdsCateg() {
  return (
    <div className='discover__Ads__categories__handler mt-5'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3>
            Ads Categories
            </h3>
            <p>
            Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia.Phasellusaccumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor
            </p>
          </div>
        </div>
        <div className="row">
          {
            cardsItems.map((el)=>{
          return(
          <CategoryCard  category={el.title}
          imgSrc={el.image}
          adsCount={el.subtit}
          subcategories={el.list}
          iconClass={el.icon}/>
          )
            })
          }
        </div>
      </div>
    </div>
  )
}
