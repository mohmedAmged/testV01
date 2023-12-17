import React, { useState } from 'react'
import './latestOfferCard.css'
import { NavLink } from 'react-router-dom';
import { calculateDiscountPercentage } from '../../functions/calcPercentage';
export default function LatestOfferCard({ offerData }) {
    const [activeIndicator, setActiveIndicator] = useState(0);
    const handleIndicatorHover = (index) => {
        setActiveIndicator(index);
    };

    const getImageSource = () => {
        return offerData.imageSources[activeIndicator];
    };

    // calc discount
    const oldPrice = offerData.old_price;
    const newPrice = offerData.new_price;
    const discountPercentage = calculateDiscountPercentage(oldPrice, newPrice);
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="recent__cart__item mb-3">
                <div className="cart__top">
                    <div className="img__Cart">
                        <img id="carImage" src={getImageSource()} alt="car__image" />
                    </div>
                    {offerData.special && (
                        <div className="cart__badge">{offerData.special}</div>
                    )}
                    <div className="cart__camera">
                        <div className="cart__Camera__content d-flex justify-content-center">
                            <i className="bi bi-suit-heart-fill"></i>
                        </div>
                    </div>
                    <div className="cart__indicator">
                        {offerData.imageSources.map((_, index) => (
                            <div
                                key={index}
                                className={`indicator ${index === activeIndicator ? 'active' : ''}`}
                                onMouseOver={() => handleIndicatorHover(index)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="cart__bottom mt-2">
                    <div className="cart__main__titels">
                        <div className="">
                            <div className="cart__title">
                                <NavLink to="" className="nav-link">
                                    {offerData.name}
                                </NavLink>
                            </div>
                            <div className="cart__subTit">
                                <div className="price__package">
                                    <span className='save__oldPrice'>${offerData.old_price}</span>
                                    <span className='save__priceDesc px-1'>From</span>
                                    <span className='save__newPrice'>${offerData.new_price}</span>
                                </div>
                                <div className="price__badge">
                                    ${discountPercentage} off
                                </div>
                            </div>
                            <div className="cart__attach">
                                {offerData.baught}+ bought
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
