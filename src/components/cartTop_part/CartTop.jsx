import React, { useState } from 'react'
import car1 from '../../assets/recentSec/car1.jpg'
import car2 from '../../assets/recentSec/car2.jpg'
import car3 from '../../assets/recentSec/car3.jpg'
import car4 from '../../assets/recentSec/car4.jpg'
export default function CartTop() {
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

    const getImageSource = () => {
        return imageSources[activeIndicator];
    };
    return (
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
    )
}
