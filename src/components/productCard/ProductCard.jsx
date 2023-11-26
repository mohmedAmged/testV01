import React, { useState } from 'react'
import './productCard.css'
import car1 from '../../assets/recentSec/car1.jpg'
import car2 from '../../assets/recentSec/car2.jpg'
import car3 from '../../assets/recentSec/car3.jpg'
import car4 from '../../assets/recentSec/car4.jpg'
export default function ProductCard() {
    const [activeIndicator, setActiveIndicator] = useState(0);
    const imageSources = [
        car1,
        car2,
        car3,
        car4
    ];

    const handleIndicatorHover = (index) => {
        setActiveIndicator(index);
    };

    // const handleIndicatorMouseOut = () => {
    //     const activeImage = imageSources[activeIndicator];
    //     const carImage = document.getElementById('carImage');
    //     if (carImage) {
    //       carImage.src = activeImage;
    //     }
    //   };

    const getImageSource = () => {
        return imageSources[activeIndicator];
    };
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="recent__cart__item">
                <div className="cart__top">
                    <div className="img__Cart">
                        <img id="carImage" src={getImageSource()} alt="car__image" />
                    </div>
                    <div className="cart__badge">
                        special
                    </div>
                    <div className="cart__camera">
                        <div className="cart__Camera__content">
                            <i class="bi bi-camera-fill"></i>
                            <span>3</span>
                        </div>
                    </div>
                    <div className="cart__indicator">
                        {imageSources.map((_, index) => (
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
                        <div className="d-flex align-items-center justify-content-between">
                            <>
                                <div className="cart__title">
                                    New BMW 3 series
                                </div>
                            </>
                            <>
                                <div className="cart__price">
                                    <div className="old__price">
                                        $ 25000
                                    </div>
                                    <div className="new__price">
                                        $ 20000
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                    <div className="cart__list__meta">
                        <span>5 years</span>
                        <span>2 years</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
