import React from 'react'
import './recentSec.css'
import car1 from '../../assets/recentSec/car1.jpg'
export default function RecentSec() {
    return (
        <div className='recent__Sec'>
            <div className="container">
                <div className="recent__cart__handler">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className='mb-3 recent__head'>
                                recent cars
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="recent__cart__item">
                                <div className="cart__top">
                                    <div className="img__Cart">
                                        <img src={car1} alt="car__image" />
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
                    </div>
                </div>
            </div>
        </div>
    )
}
