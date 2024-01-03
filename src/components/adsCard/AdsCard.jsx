import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function AdsCard({ discoverData }) {
    console.log(discoverData);
    const [activeIndicator, setActiveIndicator] = useState(0);
    const handleIndicatorHover = (index) => {
        setActiveIndicator(index);
    };

    const getImageSource = () => {
        return discoverData?.discover_images[activeIndicator]?.image;
    };
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="recent__cart__item mb-3">
                <div className="cart__top">
                    <div className="img__Cart">
                        <img id="carImage" src={getImageSource()} alt="car__image" />
                    </div>
                    {/* {restaurantData.special && (
                        <div className="cart__badge">{restaurantData.special}</div>
                    )} */}
                    <div className="cart__camera">
                        <div className="cart__Camera__content d-flex justify-content-center">
                        <i className="bi bi-suit-heart-fill"></i>
                        </div>
                    </div>
                    <div className="cart__indicator">
                        {discoverData?.discover_images?.map((_, index) => (
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
                                    {discoverData?.discover_name}
                                </NavLink>
                            </div>
                            {/* <div className="cart__subTit">{discoverData.votes} votes</div> */}
                            {/* <div className="cart__attach">
                                {restaurantData.menu}
                                <i className="bi bi-arrow-right-short"></i>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
