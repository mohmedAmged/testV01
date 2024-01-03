import React from 'react'
import './discoverHome.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import DiscoverAdsCateg from '../../components/discoverAdsCategories/DiscoverAdsCateg'
import DiscoverAdsLocation from '../../components/discoverAdsLocation/DiscoverAdsLocation'
import DiscoverAdsFilter from '../../components/discoverAdsFilter/DiscoverAdsFilter'
import DiscoverSlider from '../../components/discoverSlider/DiscoverSlider'
// import foodImg from '../../assets/discoverHomeImg/food1.jpg'
// import burger from '../../assets/discoverHomeImg/food3.jpg'
// import cafe1 from '../../assets/discoverHomeImg/cafe1.jpg'
// import cafe2 from '../../assets/discoverHomeImg/cafe2.jpg'
// import cafe3 from '../../assets/discoverHomeImg/cafe3.jpg'
// import cafe4 from '../../assets/discoverHomeImg/cafe4.jpg'
// import gym from '../../assets/discoverHomeImg/health2.jpg'
// import gym1 from '../../assets/discoverHomeImg/health1.jpg'
// import gym2 from '../../assets/discoverHomeImg/health.jpg'
import { useQuery } from '@tanstack/react-query'
import { baseURL } from '../../functions/BaseURL'
// const slidesOne = [
//   { "id": 1, "category": 'Fine Dining', "image": foodImg },
//   { "id": 2, "category": 'Italian Cuisine', "image": foodImg },
//   { "id": 3, "category": 'Seafood Delights1', "image": foodImg },
//   { "id": 4, "category": 'Seafood Delights2', "image": foodImg },
//   { "id": 5, "category": 'Seafood Delights3', "image": foodImg },
//   { "id": 6, "category": 'Seafood Delights4', "image": foodImg },
//   { "id": 7, "category": 'Seafood Delights5', "image": foodImg }
// ];

// const slidesTwo = [
//   { "id": 1, "category": 'Fine Dining', "image": burger },
//   { "id": 2, "category": 'Italian Cuisine', "image": burger },
//   { "id": 3, "category": 'Seafood Delights1', "image": burger },
//   { "id": 4, "category": 'Seafood Delights2', "image": burger },
//   { "id": 5, "category": 'Seafood Delights3', "image": burger },
//   { "id": 6, "category": 'Seafood Delights4', "image": burger },
//   { "id": 7, "category": 'Seafood Delights5', "image": burger }
// ];
// const slidesThree = [
//   { "id": 1, "category": 'cafe one', "image": cafe1 },
//   { "id": 2, "category": 'cafe two', "image": cafe2 },
//   { "id": 3, "category": 'cafe three', "image": cafe3 },
//   { "id": 5, "category": 'cafe four', "image": cafe1 },
//   { "id": 6, "category": 'cafe five', "image": cafe2 },
//   { "id": 7, "category": 'cafe six', "image": cafe4 },
// ];
// const slidesFour = [
//   { "id": 1, "category": 'gym one', "image": gym },
//   { "id": 2, "category": 'gym two', "image": gym1 },
//   { "id": 3, "category": 'gym three', "image": gym2 },
//   { "id": 4, "category": 'gym four', "image": gym },
//   { "id": 5, "category": 'gym five', "image": gym1 },
//   { "id": 6, "category": 'gym six', "image": gym2 },
// ];
export default function DiscoverHome() {
  const { data } = useQuery({
    queryKey: ['discover-home-recomended-categories'],
    queryFn: async () => {
      const fetchData = await fetch(`${baseURL}/recommend-categories`);
      const response = await fetchData.json();
      return response.data;
    },
  });
  const discoverData = useQuery({
    queryKey: ['discover-home-recomended-sub-categories'],
    queryFn: async () => {
      const fetchData = await fetch(`${baseURL}/recommend-sub-categories`);
      const response = await fetchData.json();
      return response.data;
    },
  });
  const discoverHome = useQuery({
    queryKey: ['discover-home'],
    queryFn: async () => {
      const fetchData = await fetch(`${baseURL}/discover`);
      const response = await fetchData.json();
      return response.data;
    },
  });
  return (
    <div>
      <DynamicHero title="Discover Everything: Your Ultimate Hub for All Things Extraordinary!"
        description="Unleash curiosity and explore a world where every discovery is a journey in itself" />

      {data?.recommendedCategories?.map((category, index) => (
        <DiscoverSlider
          key={index}
          title={`Most recommended ${category.name} categories`}
          subtitle="Winning flavors for every appetite"
          slides={category?.subCategories?.map(subCategory => ({
            id: subCategory.sub_id,
            category: subCategory.sub_name,
            image: subCategory.sub_image,
          }))}
        />
      ))}

      <DiscoverAdsCateg adsFetched={discoverHome?.data?.ads?.ads_categories}/>

      {discoverData?.data?.recommendedSubCategories?.map((subCategory, index) => (
        <DiscoverSlider
          key={index}
          title={`Most recommended ${subCategory.name} in country`}
          subtitle="Discover the best places"
          slides={subCategory?.discovers?.map(discover => ({
            id: discover.discover_id,
            category: discover.discover_name,
            image: discover.discover_image,
          }))}
        />
      ))}
      <DiscoverAdsLocation />
      <DiscoverAdsFilter discoversFetched={discoverHome?.data?.discoverCategories}/>
    </div>
  )
}
