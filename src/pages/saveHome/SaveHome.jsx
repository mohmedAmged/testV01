import React, { useEffect, useState } from 'react'
import './saveHome.css'
import DynamicHero from '../../components/dynamicHeroPart/DynamicHero'
import CouponSaveSlider from '../../components/couponSaveSlider/CouponSaveSlider'
import coupon1 from '../../assets/saveHomeImg/couponImg.png'
import coupon2 from '../../assets/saveHomeImg/coupLogo2.png'
import coupon3 from '../../assets/saveHomeImg/coupLogo3.png'
import coupon4 from '../../assets/saveHomeImg/coupLogo4.png'
import SavePopuCategory from '../../components/savePopularCategory/SavePopuCategory'
import icon1 from '../../assets/saveHomeImg/icon1.gif'
import icon2 from '../../assets/saveHomeImg/icon2.gif'
import icon3 from '../../assets/saveHomeImg/icon3.gif'
import icon4 from '../../assets/saveHomeImg/icon4.gif'
import icon5 from '../../assets/saveHomeImg/icon5.gif'
import icon6 from '../../assets/saveHomeImg/icon6.gif'
import icon7 from '../../assets/saveHomeImg/icon7.gif'
import SaveDifferentOffers from '../../components/saveDifferentOffers/SaveDifferentOffers'
import FaqSave from '../../components/faqSave/FaqSave'
import CodeSaveSlider from '../../components/codeSaveSlider/CodeSaveSlider'
import Loader from '../../components/loader/Loader'
const saveSlideOne = [
    { "id": 1, "tagName": "Exclusive", "couponImg": coupon1, "couponOffer": "5% Off Your Entire Cart", "expDate": "06-05-2025", "couponNum": 1254 },
    { "id": 2, "tagName": "Good", "couponImg": coupon2, "couponOffer": "10% Off Your Entire Cart", "expDate": "06-05-2025", "couponNum": 3254 },
    { "id": 3, "tagName": "Exclusive", "couponImg": coupon3, "couponOffer": "30% Off Your Entire Cart", "expDate": "06-10-2025", "couponNum": 1264 },
    { "id": 4, "tagName": "Sponsered", "couponImg": coupon4, "couponOffer": "70% Off Your Entire Cart", "expDate": "07-05-2025", "couponNum": 1854 },
    { "id": 5, "tagName": "Exclusive", "couponImg": coupon1, "couponOffer": "5% Off Your Entire Cart", "expDate": "06-05-2025", "couponNum": 9054 },
    { "id": 6, "tagName": "Sponsered", "couponImg": coupon4, "couponOffer": "70% Off Your Entire Cart", "expDate": "07-05-2025", "couponNum": 1854 },
    { "id": 7, "tagName": "Exclusive", "couponImg": coupon3, "couponOffer": "30% Off Your Entire Cart", "expDate": "06-10-2025", "couponNum": 1264 },
]
const couponCardOne = [
    { "icon": icon1, "Title": "Tech Treats", "couponNum": 1, "id": 1 },
    { "icon": icon2, "Title": "Fashion Finds", "couponNum": 2, "id": 2 },
    { "icon": icon3, "Title": "Hotels & Travel", "couponNum": 2, "id": 3 },
    { "icon": icon4, "Title": "Beauty & Spas", "couponNum": 1, "id": 4 },
    { "icon": icon2, "Title": "Automotive", "couponNum": 3, "id": 5 },
    { "icon": icon5, "Title": "Food & Drink", "couponNum": 1, "id": 6 },
    { "icon": icon6, "Title": "Home Services", "couponNum": 0, "id": 7 },
    { "icon": icon7, "Title": "Entertainment", "couponNum": 1, "id": 8 },
]
export default function SaveHome() {
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
            <>
                <DynamicHero title="Secure Your Future: Discover Smart Savings Solutions!"
                    description="Unlock Thrilling Deals: Your Gateway to Exclusive Offers!" />
                <CodeSaveSlider title="Exclusive Coupons" saveSlides={saveSlideOne} />
                <CouponSaveSlider title="Get Your Coupon Now" saveSlides={saveSlideOne} />
                <SavePopuCategory couponCards={couponCardOne} />
                <SaveDifferentOffers />
                <FaqSave />
            </>
        }
        </>
    )
}
