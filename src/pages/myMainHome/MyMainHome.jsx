import React from 'react'
import './myMainHome.css'
import MainHomeSlider from '../../components/mainHomeSlider/MainHomeSlider'
import HomeMainHero from '../../components/homeMainHero/HomeMainHero'
import DiscoverSlider from '../../components/discoverSlider/DiscoverSlider'
import { useQuery } from '@tanstack/react-query'
import { baseURL } from '../../functions/BaseURL'
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

    const discoverData = useQuery({
        queryKey: ['discover-home-recomended-sub-categories'],
        queryFn: async () => {
            const fetchData = await fetch(`${baseURL}/recommend-sub-categories`);
            const response = await fetchData.json();
            return response.data;
        },
    });
    return (
        <div className='mainHome__handler mb-4'>
            <HomeMainHero
                title="Infinite Horizons: Your Gateway to Limitless Discoveries and Opportunities!"
                description="Uncover the extraordinary—explore new offers, cars, votes, sponsorships, and more, all in one dynamic platform for users and business owners alike!" />
            <MainHomeSlider homeSliderItems={homeSliderItems} />
            <DiscoverSlider title="Most recent cars" subtitle="warranty-valid cars" slides={mergedCarSlide} />
            {discoverData?.data?.recommendedSubCategories?.map((subCategory, index) => (
                <DiscoverSlider
                    key={index}
                    title={`Most recommended ${subCategory.name} in country`}
                    subtitle="Discover the best places"
                    slides={subCategory?.discovers?.map(discover => ({
                        id: discover.discover_id,
                        category: discover.discover_name,
                        image: discover.discover_image,
                    }))}
                />
            ))}
        </div>
    )
}
