import React from 'react'
import './myMainHome.css'
import MainHomeSlider from '../../components/mainHomeSlider/MainHomeSlider'
import HomeMainHero from '../../components/homeMainHero/HomeMainHero'
import DiscoverSlider from '../../components/discoverSlider/DiscoverSlider'
import cafe1 from '../../assets/discoverHomeImg/cafe1.jpg'
import cafe2 from '../../assets/discoverHomeImg/cafe2.jpg'
import cafe3 from '../../assets/discoverHomeImg/cafe3.jpg'
import cafe4 from '../../assets/discoverHomeImg/cafe4.jpg'
import burger from '../../assets/discoverHomeImg/food3.jpg'
import gym from '../../assets/discoverHomeImg/health2.jpg'
import gym1 from '../../assets/discoverHomeImg/health1.jpg'
import gym2 from '../../assets/discoverHomeImg/health.jpg'
import { useQuery } from '@tanstack/react-query'
import { baseURL } from '../../functions/BaseURL'
import RecentSec from '../../components/recentSec/RecentSec'
const homeSliderItems = [
    {
        "title": "Warranty cars",
        "cardBg": "first__Bg",
        "mainLink": "/cars",
        "subCategory": [
            {
                "subTitle": "new cars",
                "subLink": "/new-cars"
            },
            {
                "subTitle": "used cars",
                "subLink": "/new-cars"
            },
        ],

    },
    {
        "title": "Discover everything",
        "mainLink": "/discover",
        "cardBg": "second__Bg",
        "subCategory": [
            {
                "subTitle": "food",
                "subLink": "/discover/category/food"
            },
            {
                "subTitle": "fashion",
                "subLink": "/discover/category/fashion"
            },
            {
                "subTitle": "health",
                "subLink": "/discover/category/health"
            },
            {
                "subTitle": "makeup",
                "subLink": "/discover/category/makeup"
            },
            {
                "subTitle": "electronics",
                "subLink": "/discover/category/electronics"
            },
        ],
    },
    {
        "title": "save anything",
        "mainLink": "/save",
        "cardBg": "third__Bg",
        "subCategory": [
            {
                "subTitle": "Tech Treats",
                "subLink": "/save/Get%20Your%20Coupon%20Now"
            },
            {
                "subTitle": "Fashion Finds",
                "subLink": "/save/Get%20Your%20Coupon%20Now"
            },
            {
                "subTitle": "Hotels & Travel",
                "subLink": "/save/Exclusive%20Coupons"
            },
            {
                "subTitle": "Beauty & Spas",
                "subLink": "/save/Exclusive%20Coupons"
            },
            {
                "subTitle": "Automotive",
                "subLink": "/save/Exclusive%20Coupons"
            },
            {
                "subTitle": "Food & Drink",
                "subLink": "/save/Get%20Your%20Coupon%20Now"
            },
        ],
    },
    {
        "title": "gain points",
        "mainLink": "/user/dashboard",
        "cardBg": "forth__Bg",
        "subCategory": [
            {
                "subTitle": "gain",
                "subLink": "/user/dashboard"
            },
            {
                "subTitle": "donations",
                "subLink": "/user/dashboard"
            },
        ],
    },
]
const slidesThree = [
    { "id": 1, "category": 'cafe one', "image": cafe1 },
    { "id": 2, "category": 'cafe two', "image": cafe2 },
    { "id": 3, "category": 'cafe three', "image": cafe3 },
    { "id": 5, "category": 'cafe four', "image": cafe1 },
    { "id": 6, "category": 'cafe five', "image": cafe2 },
    { "id": 7, "category": 'cafe six', "image": cafe4 },
];
const slidesTwo = [
    { "id": 1, "category": 'Fine Dining', "image": burger },
    { "id": 2, "category": 'Italian Cuisine', "image": burger },
    { "id": 3, "category": 'Seafood Delights1', "image": burger },
    { "id": 4, "category": 'Seafood Delights2', "image": burger },
    { "id": 5, "category": 'Seafood Delights3', "image": burger },
    { "id": 6, "category": 'Seafood Delights4', "image": burger },
    { "id": 7, "category": 'Seafood Delights5', "image": burger }
];
const slidesFour = [
    { "id": 1, "category": 'gym one', "image": gym },
    { "id": 2, "category": 'gym two', "image": gym1 },
    { "id": 3, "category": 'gym three', "image": gym2 },
    { "id": 4, "category": 'gym four', "image": gym },
    { "id": 5, "category": 'gym five', "image": gym1 },
    { "id": 6, "category": 'gym six', "image": gym2 },
];
export default function MyMainHome() {
    const { data } = useQuery({
        queryKey: ['car-home'],
        queryFn: async () => {
          const fetchData = await fetch(baseURL);
          const response = await fetchData.json();
          return response.data;
        },
      });
      const updatedCarSlide = data?.cars?.map(car => ({
        id: car.id,
        category: car.name,
        image: car.main_image
      })) || [];
      const carSlide = [];
    const mergedCarSlide = [...carSlide, ...updatedCarSlide];
    // console.log(data.cars[0]);
    return (
        <div className='mainHome__handler mb-4'>
            <HomeMainHero
                title="Infinite Horizons: Your Gateway to Limitless Discoveries and Opportunities!"
                description="Uncover the extraordinary—explore new offers, cars, votes, sponsorships, and more, all in one dynamic platform for users and business owners alike!" />
            <MainHomeSlider homeSliderItems={homeSliderItems} />
            <DiscoverSlider title="Most recent cars" subtitle="warranty-valid cars" slides={mergedCarSlide} />
            <DiscoverSlider title=" Most recommend cafe in country" subtitle="Winning flavors for every appetite" slides={slidesThree} />
            <DiscoverSlider title=" Most recommend burgers in country" subtitle="Winning flavors for every appetite" slides={slidesTwo} />
            <DiscoverSlider title="Most recommended gym fit" subtitle="Winning flavors for every appetite" slides={slidesFour} />
        </div>
    )
}
