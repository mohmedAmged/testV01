import React from 'react'
import './saveHome.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import CouponSaveSlider from '../../components/couponSaveSlider/CouponSaveSlider'
import coupon1 from '../../assets/saveHomeImg/couponImg.png'
import coupon2 from '../../assets/saveHomeImg/coupLogo2.png'
import coupon3 from '../../assets/saveHomeImg/coupLogo3.png'
import coupon4 from '../../assets/saveHomeImg/coupLogo4.png'
const saveSlideOne = [
    {"id": 1, "tagName": "Exclusive", "couponImg": coupon1, "couponOffer": "5% Off Your Entire Cart", "expDate": "06-05-2025"},
    {"id": 2, "tagName": "Good", "couponImg": coupon2, "couponOffer": "10% Off Your Entire Cart", "expDate": "06-05-2025"},
    {"id": 3, "tagName": "Exclusive", "couponImg": coupon3, "couponOffer": "30% Off Your Entire Cart", "expDate": "06-10-2025"},
    {"id": 4, "tagName": "Sponsered", "couponImg": coupon4, "couponOffer": "70% Off Your Entire Cart", "expDate": "07-05-2025"},
    {"id": 5, "tagName": "Exclusive", "couponImg": coupon1, "couponOffer": "5% Off Your Entire Cart", "expDate": "06-05-2025"},
]
export default function SaveHome() {
    return (
        <div>
            <DynamicHero title="Secure Your Future: Discover Smart Savings Solutions!"
                description="Unlock Thrilling Deals: Your Gateway to Exclusive Offers!" />
            <CouponSaveSlider title="Exclusive Coupons" saveSlides={saveSlideOne}/>
        </div>
    )
}
