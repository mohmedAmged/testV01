import React from 'react'
import './saveSubPage.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import { useParams } from 'react-router-dom';
import DynamicMapWeb from '../../components/dynamicMapWeb/DynamicMapWeb';
import SaveSubList from '../../components/saveSubList/SaveSubList';
export default function SaveSubPage() {
  const { pageName } = useParams();
  const links = [
    { "label": 'Home', "route": '/' },
    { "label": 'save', "route": '/save' },
    { "label": `${pageName}`, "route": `/save/${pageName}` },
];
  return (
    <div className='saveSubPage__handler'>
      <DynamicHero title={`${pageName}`}/>
      <DynamicMapWeb links={links}/>
      <SaveSubList />
    </div>
  )
}
