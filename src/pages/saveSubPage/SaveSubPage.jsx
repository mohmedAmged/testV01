import React, { useEffect, useState } from 'react'
import './saveSubPage.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import { useParams } from 'react-router-dom';
import DynamicMapWeb from '../../components/dynamicMapWeb/DynamicMapWeb';
import SaveSubList from '../../components/saveSubList/SaveSubList';
import Loader from '../../components/loader/Loader';
export default function SaveSubPage() {
  const { pageName } = useParams();
  const links = [
    { "label": 'Home', "route": '/' },
    { "label": 'save', "route": '/save' },
    { "label": `${pageName}`, "route": `/save/${pageName}` },
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
    (showContent) ? 
      <Loader />
    :
      <div className='saveSubPage__handler'>
        <DynamicHero title={`${pageName}`}/>
        <DynamicMapWeb links={links}/>
        <SaveSubList />
      </div>
    </>
  )
}
