import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function AdsCard({ restaurantData }) {
    const [activeIndicator, setActiveIndicator] = useState(0);
    const handleIndicatorHover = (index) => {
        setActiveIndicator(index);
    };

    const getImageSource = () => {
        return restaurantData.imageSources[activeIndicator];
    };
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="recent__cart__item">
                <div className="cart__top">
                    <div className="img__Cart">
                        <img id="carImage" src={getImageSource()} alt="car__image" />
                    </div>
                    {restaurantData.special && (
                        <div className="cart__badge">{restaurantData.special}</div>
                    )}
                    <div className="cart__camera">
                        <div className="cart__Camera__content d-flex justify-content-center">
                        <i class="bi bi-suit-heart-fill"></i>
                        </div>
                    </div>
                    <div className="cart__indicator">
                        {restaurantData.imageSources.map((_, index) => (
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
                                    {restaurantData.name}
                                </NavLink>
                            </div>
                            <div className="cart__subTit">{restaurantData.votes} votes</div>
                            <div className="cart__attach">
                                {restaurantData.menu}
                                <i className="bi bi-arrow-right-short"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
