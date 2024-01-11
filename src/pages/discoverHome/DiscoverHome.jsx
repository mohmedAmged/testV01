import React, { useEffect, useState } from 'react'
import './discoverHome.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import DiscoverAdsCateg from '../../components/discoverAdsCategories/DiscoverAdsCateg'
import DiscoverAdsLocation from '../../components/discoverAdsLocation/DiscoverAdsLocation'
import DiscoverAdsFilter from '../../components/discoverAdsFilter/DiscoverAdsFilter'
import DiscoverSlider from '../../components/discoverSlider/DiscoverSlider'
import { useQuery } from '@tanstack/react-query'
import { baseURL, currCountryCode } from '../../functions/BaseURL'
import Loader from '../../components/loader/Loader'
import Error from '../../components/error/Error'
// const slidesOne = [
//   { "id": 1, "category": 'Fine Dining', "image": foodImg },
//   { "id": 2, "category": 'Italian Cuisine', "image": foodImg },
//   { "id": 3, "category": 'Seafood Delights1', "image": foodImg },
//   { "id": 4, "category": 'Seafood Delights2', "image": foodImg },
//   { "id": 5, "category": 'Seafood Delights3', "image": foodImg },
//   { "id": 6, "category": 'Seafood Delights4', "image": foodImg },
//   { "id": 7, "category": 'Seafood Delights5', "image": foodImg }
// ];



export default function DiscoverHome() {
  const { data ,isError , isLoading} = useQuery({
    queryKey: ['discover-home-recomended-categories'],
    queryFn: async () => {
      const fetchData = await fetch(`${baseURL}/${currCountryCode}/recommend-categories`);
      const response = await fetchData.json();
      return response.data;
    },
  });
  const discoverData = useQuery({
    queryKey: ['discover-home-recomended-sub-categories'],
    queryFn: async () => {
      const fetchData = await fetch(`${baseURL}/${currCountryCode}/recommend-sub-categories`);
      const response = await fetchData.json();
      return response.data;
    },
  });
  const discoverHome = useQuery({
    queryKey: ['discover-home'],
    queryFn: async () => {
      const fetchData = await fetch(`${baseURL}/${currCountryCode}/discover`);
      const response = await fetchData.json();
      return response.data;
    },
  });

  const [showContent, setShowContent] = useState(true);
  useEffect(() => {
      const timeoutId = setTimeout(() => {
          setShowContent(false);
      }, 800);
      return () => clearTimeout(timeoutId);
  });

  return (
    <>
    {
      (showContent || isLoading || discoverData.isLoading || discoverHome.isLoading) ?
      <Loader /> 
      : (isError || discoverHome.isError || discoverData.isError) ?
      <Error /> 
      : 
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
        {/* <DiscoverAdsFilter discoversFetched={discoverHome?.data?.discovers}/> */}
      </div>
    }
    </>
  )
}
