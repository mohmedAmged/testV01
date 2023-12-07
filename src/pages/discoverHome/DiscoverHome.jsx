import React from 'react'
import './discoverHome.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import DiscoverAdsCateg from '../../components/discoverAdsCategories/DiscoverAdsCateg'
import DiscoverAdsLocation from '../../components/discoverAdsLocation/DiscoverAdsLocation'
import DiscoverAdsFilter from '../../components/discoverAdsFilter/DiscoverAdsFilter'
import DiscoverSlider from '../../components/discoverSlider/DiscoverSlider'
import foodImg from '../../assets/discoverHomeImg/food1.jpg'
import burger from '../../assets/discoverHomeImg/food3.jpg'
import cafe1 from '../../assets/discoverHomeImg/cafe1.jpg'
import cafe2 from '../../assets/discoverHomeImg/cafe2.jpg'
import cafe3 from '../../assets/discoverHomeImg/cafe3.jpg'
import cafe4 from '../../assets/discoverHomeImg/cafe4.jpg'
import gym from '../../assets/discoverHomeImg/health2.jpg'
import gym1 from '../../assets/discoverHomeImg/health1.jpg'
import gym2 from '../../assets/discoverHomeImg/health.jpg'
const slidesOne = [
  { "id": 1, "category": 'Fine Dining', "image": foodImg },
  { "id": 2, "category": 'Italian Cuisine', "image": foodImg },
  { "id": 3, "category": 'Seafood Delights', "image": foodImg },
  { "id": 3, "category": 'Seafood Delights', "image": foodImg },
  { "id": 3, "category": 'Seafood Delights', "image": foodImg },
  { "id": 3, "category": 'Seafood Delights', "image": foodImg },
  { "id": 3, "category": 'Seafood Delights', "image": foodImg }
];
const slidesTwo = [
  { "id": 1, "category": 'Fine Dining', "image": burger },
  { "id": 2, "category": 'Italian Cuisine', "image": burger },
  { "id": 3, "category": 'Seafood Delights', "image": burger },
  { "id": 3, "category": 'Seafood Delights', "image": burger },
  { "id": 3, "category": 'Seafood Delights', "image": burger },
  { "id": 3, "category": 'Seafood Delights', "image": burger },
  { "id": 3, "category": 'Seafood Delights', "image": burger }
];
const slidesThree = [
  { "id": 1, "category": 'cafe one', "image": cafe1 },
  { "id": 2, "category": 'cafe two', "image": cafe2 },
  { "id": 3, "category": 'cafe three', "image": cafe3 },
  { "id": 3, "category": 'cafe four', "image": cafe4 },
];
const slidesFour = [
  { "id": 1, "category": 'gym one', "image": gym },
  { "id": 2, "category": 'gym two', "image": gym1 },
  { "id": 3, "category": 'gym three', "image": gym2 },
  { "id": 1, "category": 'gym one', "image": gym },
];
export default function DiscoverHome() {
  return (
    <div>
      <DynamicHero title="Discover Everything: Your Ultimate Hub for All Things Extraordinary!"
        description="Unleash curiosity and explore a world where every discovery is a journey in itself" />
      <DiscoverSlider title="Most recommended food categories" subtitle="Winning flavors for every appetite" slides={slidesOne} />
      <DiscoverAdsCateg />
      <DiscoverSlider title=" Most recommend burgers in country" subtitle="Winning flavors for every appetite" slides={slidesTwo} />
      <DiscoverSlider title=" Most recommend cafe in country" subtitle="Winning flavors for every appetite" slides={slidesThree} />
      <DiscoverSlider title="Most recommended gym fit" subtitle="Winning flavors for every appetite" slides={slidesFour} />
      <DiscoverAdsLocation />
      <DiscoverAdsFilter />
    </div>
  )
}
