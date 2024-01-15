import React, { useEffect, useState } from 'react'
import './saveSubPage.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import { useParams } from 'react-router-dom';
import DynamicMapWeb from '../../components/dynamicMapWeb/DynamicMapWeb';
import SaveSubList from '../../components/saveSubList/SaveSubList';
import Loader from '../../components/loader/Loader';
import { currCountryCode } from '../../functions/BaseURL';
export default function SaveSubPage() {
  const { pageName } = useParams();
  console.log(pageName);
  const links = [
    { "label": 'Home', "route": `/${currCountryCode}` },
    { "label": 'save', "route": `/${currCountryCode}/save` },
    { "label": `${pageName}`, "route": `/${currCountryCode}/save/${pageName}` },
  ];

  const [showContent, setShowContent] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(false);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [showContent]);

  return (
    <>
   {
    (showContent) ? 
      <Loader />
    :
      <div className='saveSubPage__handler'>
        <DynamicHero title={`${pageName}`}/>
        <DynamicMapWeb links={links}/>
        <SaveSubList />
      </div>
      }
    </>
  )
}
