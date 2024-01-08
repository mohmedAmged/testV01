import React, { useEffect, useState } from 'react'
import './discoverCategoryPage.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import { useParams } from 'react-router-dom';
import DynamicMapWeb from '../../components/dynamicMapWeb/DynamicMapWeb';
import DiscovercategoryList from '../../components/discoverCategoryList/DiscovercategoryList';
import Loader from '../../components/loader/Loader';

export default function DiscoverCategoryPage() {
    const { categoryName } = useParams();
    const links = [
        { "label": 'Home', "route": '/' },
        { "label": 'Discover', "route": '/discover' },
        { "label": `${categoryName}`, "route": `/discover/category/${categoryName}` },
    ];

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
            (showContent) ? 
            <Loader />
            : 
            <div className='discoverCategoryPage__handler'>
                <DynamicHero title="Discover Everything"
                    description="Unleash curiosity and explore a world where every discovery is a journey in itself" />
                <DynamicMapWeb links={links}  />
                <DiscovercategoryList />
            </div>
        }
        </>
    )
}
