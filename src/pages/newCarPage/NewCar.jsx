import React, { useEffect, useState } from 'react';
import './newCar.css';
import DynamicHeroSec from '../../components/dynamicHeroSec/DynamicHeroSec';
import heroBg from '../../assets/dynamicHeroImgs/Conv.png';
import ShopSec from '../../components/shopSec/ShopSec';
import { baseURL } from '../../functions/BaseURL';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';

export default function NewCar() {
  const [showContent, setShowContent] = useState(true);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['countries'],
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
        <ShopSec cars={data?.cars} />
      </>
    }
    </>
  );
};
