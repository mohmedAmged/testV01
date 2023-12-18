import React, { useState } from 'react'
import './saveDifferentOffer.css'
import resturant from '../../assets/discoverHomeImg/restaurant.jpg'
import resturant2 from '../../assets/discoverHomeImg/resturant2.jpg'
import food3 from '../../assets/discoverHomeImg/food3.jpg'
import food2 from '../../assets/discoverHomeImg/food2.jpg'
import food1 from '../../assets/discoverHomeImg/food1.jpg'
import food4 from '../../assets/discoverHomeImg/food4.jpg'
import health1 from '../../assets/discoverHomeImg/health1.jpg'
import health2 from '../../assets/discoverHomeImg/health2.jpg'
import food5 from '../../assets/discoverHomeImg/food5.jpg'
import LatestOfferCard from '../latestOfferCard/LatestOfferCard'
import { NavLink } from 'react-router-dom'
const offersDataArr = [
    {
        "name": 'Jordan Restaurant',
        "special": 'Special',
        "category": "latest",
        "old_price": 666,
        "new_price": 70,
        "baught": 110,
        "image": resturant,
        "imageSources": [resturant2, resturant],
    },
    {
        "name": 'goucy Restaurant',
        "special": '',
        "category": "food",
        "old_price": 254,
        "new_price": 90,
        "baught": 190,
        "image": resturant,
        "imageSources": [food3, food2, food1],
    },
    {
        "name": 'Food Hub',
        "special": 'sponsered',
        "category": "food",
        "old_price": 546,
        "new_price": 70,
        "baught": 230,
        "image": resturant,
        "imageSources": [food5, food4],
    },
    {
        "name": 'Fitness',
        "special": '',
        "category": "health",
        "old_price": 300,
        "new_price": 110,
        "baught": 400,
        "image": resturant,
        "imageSources": [health2, health1],
    }
]
export default function SaveDifferentOffers() {
    const [activeTab, setActiveTab] = useState('latest');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const filteredRestaurantData = () => {
        if (activeTab === 'latest') {
            return offersDataArr;
        } else {
            return offersDataArr.filter((data) => data.category.toLowerCase() === activeTab.toLowerCase());
        }
    };
    return (
        <div className='saveDifferentOffer__handler'>
            <div className="container">
                <>
                    <div className="row ">
                        {/* <div className="col-lg-8 ">
                            <h3>
                                Latest Offers
                            </h3>
                            <NavLink className="nav-link couponSlider__head__link">
                                view more
                            </NavLink>
                        </div> */}
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="couponSlider__head">
                                <h3>
                                    Latest Offers
                                </h3>
                                <NavLink className="nav-link couponSlider__head__link">
                                    view more
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </>
                <div className="ads__filter__tabs">
                    <div className="row">
                        <div className="col-lg-8">
                            <ul >
                                <li id='latest' className={`ads__tab ${activeTab === 'latest' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('latest')}
                                >
                                    Latest
                                </li>
                                <li id='food' className={`ads__tab ${activeTab === 'food' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('food')}
                                >
                                    Food
                                </li>
                                <li id='health' className={`ads__tab ${activeTab === 'health' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('health')}
                                >
                                    Health
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ads__filter__cards">
                    <div className="row justify-content-start">
                        {
                            filteredRestaurantData().map((offerData, index) => {
                                return (
                                    <LatestOfferCard key={index} offerData={offerData} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
