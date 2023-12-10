import React, { useEffect, useState } from 'react';
import './newCar.css';
import DynamicHeroSec from '../../components/dynamicHeroSec/DynamicHeroSec';
import heroBg from '../../assets/dynamicHeroImgs/Conv.png';
import ShopSec from '../../components/shopSec/ShopSec';
import { baseURL } from '../../functions/BaseURL';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';
import DynamicMapWeb from '../../components/dynamicMapWeb/DynamicMapWeb';

export default function NewCar() {
  const [showContent, setShowContent] = useState(true);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['cars'],
    queryFn: async () => {
      const fetchData = await fetch(`${baseURL}/cars`);
      const response = await fetchData.json();
      return response.data;
    },
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(false);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [showContent]);

  const links = [
    { "label": 'Home', "route": '/' },
    { "label": 'cars', "route": '/cars' },
    { "label": 'New Cars', "route": '/new-cars' },
];
  return (
    <>
    {
      (isLoading || showContent) ? 
      <Loader />
      : isError ? 
      <Error error={error} />
      : 
      <>
        <DynamicHeroSec backgroundImage={heroBg} title="New Cars" content="New cars"/>
        <DynamicMapWeb links={links}  />
        <ShopSec cars={data?.cars} />
      </>
    }
    </>
  );
};
