import React from 'react'
import './myMainHome.css'
import MainHomeSlider from '../../components/mainHomeSlider/MainHomeSlider'
import HomeMainHero from '../../components/homeMainHero/HomeMainHero'
const homeSliderItems =[
    {
        "title" : "Warranty cars",
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
        "title" : "Discover everything",
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
        "title" : "save anything",
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
        "title" : "gain points",
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
    return (
        <div className='mainHome__handler'>
            <HomeMainHero
            title="Infinite Horizons: Your Gateway to Limitless Discoveries and Opportunities!"
            description="Uncover the extraordinary—explore new offers, cars, votes, sponsorships, and more, all in one dynamic platform for users and business owners alike!" />
            <MainHomeSlider homeSliderItems={homeSliderItems}/>
        </div>
    )
}
