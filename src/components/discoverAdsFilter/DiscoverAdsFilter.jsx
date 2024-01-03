import React, { useState } from 'react'
import './discoverAdsFilter.css'
// import resturant from '../../assets/discoverHomeImg/restaurant.jpg'
// import resturant2 from '../../assets/discoverHomeImg/resturant2.jpg'
// import one from '../../assets/discoverHomeImg/fashion.jpg'
// import two from '../../assets/discoverHomeImg/electronic.jpg'
// import food3 from '../../assets/discoverHomeImg/food3.jpg'
// import food2 from '../../assets/discoverHomeImg/food2.jpg'
// import food1 from '../../assets/discoverHomeImg/food1.jpg'
// import food4 from '../../assets/discoverHomeImg/food4.jpg'
// import health1 from '../../assets/discoverHomeImg/health1.jpg'
// import health2 from '../../assets/discoverHomeImg/health2.jpg'
// import food5 from '../../assets/discoverHomeImg/food5.jpg'
import AdsCard from '../adsCard/AdsCard'
// const restaurantDataArr = [
//     {
//         "name": 'Jordan Restaurant',
//         "special": 'Special',
//         "category": "latest",
//         "votes": '1,358',
//         "menu": 'open',
//         "image": resturant,
//         "imageSources": [resturant2, resturant],
//     },
//     {
//         "name": 'goucy Restaurant',
//         "special": '',
//         "category": "food",
//         "votes": '1,158',
//         "menu": 'Menu',
//         "image": resturant,
//         "imageSources": [food3, food2, food1],
//     },
//     {
//         "name": 'Food Hub',
//         "special": 'sponsered',
//         "category": "food",
//         "votes": '1,158',
//         "menu": 'Menu',
//         "image": resturant,
//         "imageSources": [food5, food4],
//     },
//     {
//         "name": 'Fitness',
//         "special": '',
//         "category": "health",
//         "votes": '1,158',
//         "menu": 'time',
//         "image": resturant,
//         "imageSources": [health2, health1],
//     }
// ]

    ;
export default function DiscoverAdsFilter({ discoversFetched }) {

    const [activeTab, setActiveTab] = useState('latest');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const categoryNames = discoversFetched?.discoverCategories?.map((category) => category?.name);

    const filteredDiscoverData = () => {
        if (activeTab === 'latest') {
            return discoversFetched?.discoverCategories;
        } else {
            return discoversFetched?.discoverCategories?.filter((data) => data?.name?.toLowerCase() === activeTab?.toLowerCase());
        }
    };

    const getDiscoversByCategory = (categoryName) => {
        return discoversFetched?.discoverCategories?.find((category) => category?.name?.toLowerCase() === categoryName?.toLowerCase())?.discovers || [];
    };
    return (

        <div className='discoverAdsFilter__handler my-5'>
            <div className="container">
                <div className="ads__filter__heading">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h3>Advertisements</h3>
                            <p>An advertisement section where you can find your best destination for whatever you want.</p>
                        </div>
                    </div>
                </div>
                <div className="ads__filter__tabs">
                    <div className="row">
                        <div className="col-lg-8">
                            <ul>
                                <li
                                    key='latest'
                                    className={`ads__tab ${activeTab === 'latest' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('latest')}
                                >
                                    Latest
                                </li>
                                {categoryNames?.map((categoryName) => (
                                    <li
                                        key={categoryName}
                                        className={`ads__tab ${activeTab === categoryName?.toLowerCase() ? 'active' : ''}`}
                                        onClick={() => handleTabClick(categoryName?.toLowerCase())}
                                    >
                                        {categoryName}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ads__filter__cards">
                    <div className="row">
                        {filteredDiscoverData()?.map((discoverCategory, index) => (
                            <div key={index}>
                                <div className="row">
                                    {getDiscoversByCategory(discoverCategory?.name)?.map((discoverData, discoverIndex) => (
                                        <AdsCard key={discoverIndex} discoverData={discoverData} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
// <div className='discoverAdsFilter__handler my-5'>
//     <div className="container">
//         <div className="ads__filter__heading">
//             <div className="row justify-content-center">
//                 <div className="col-lg-8 text-center">
//                     <h3>
//                         Advertisements
//                     </h3>
//                     <p>
//                         An advertisement section where can fin your best destination to what ever you want.
//                     </p>
//                 </div>
//             </div>
//         </div>
//         <div className="ads__filter__tabs">
//             <div className="row">
//                 <div className="col-lg-8">
//                     <ul >
//                         <li id='latest' className={`ads__tab ${activeTab === 'latest' ? 'active' : ''}`}
//                             onClick={() => handleTabClick('latest')}
//                         >
//                             Latest
//                         </li>
//                         <li id='food' className={`ads__tab ${activeTab === 'food' ? 'active' : ''}`}
//                             onClick={() => handleTabClick('food')}
//                         >
//                             Food
//                         </li>
//                         <li id='health' className={`ads__tab ${activeTab === 'health' ? 'active' : ''}`}
//                             onClick={() => handleTabClick('health')}
//                         >
//                             Health
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div className="ads__filter__cards">
//             <div className="row">
//                 {
//                     filteredRestaurantData().map((restaurantData, index) => {
//                         return (
//                             <AdsCard key={index} restaurantData={restaurantData} />
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     </div>
// </div>

// const [activeTab, setActiveTab] = useState('latest');

// const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
// };

// const filteredRestaurantData = () => {
//     if (activeTab === 'latest') {
//         return restaurantDataArr;
//     } else {
//         return restaurantDataArr.filter((data) => data.category.toLowerCase() === activeTab.toLowerCase());
//     }
// };