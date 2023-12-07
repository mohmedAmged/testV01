import React from 'react'
import './discoverCategoryPage.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import { useParams } from 'react-router-dom';
import DynamicMapWeb from '../../components/dynamicMapWeb/DynamicMapWeb';
import DiscovercategoryList from '../../components/discoverCategoryList/DiscovercategoryList';

export default function DiscoverCategoryPage() {
    const { categoryName } = useParams();
    const links = [
        { "label": 'Home', "route": '/' },
        { "label": 'Discover', "route": '/discover' },
        { "label": `${categoryName}`, "route": `/discover/category/${categoryName}` },
    ];
    return (
        <div className='discoverCategoryPage__handler'>
            <DynamicHero title="Discover Everything"
                description="Unleash curiosity and explore a world where every discovery is a journey in itself" />
            <DynamicMapWeb links={links}  />
            <DiscovercategoryList />
        </div>
    )
}
