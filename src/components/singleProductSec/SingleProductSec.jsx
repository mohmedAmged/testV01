import React, { useState } from 'react'
import './singleProductSec.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom'
import DynamicHeroSec from '../dynamicHeroSec/DynamicHeroSec'
import heroBg from '../../assets/dynamicHeroImgs/Conv.png'
import img1 from '../../assets/recentSec/car1.jpg'
import img2 from '../../assets/recentSec/car2.jpg'
import img3 from '../../assets/recentSec/car3.jpg'
import img4 from '../../assets/recentSec/car4.jpg'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SingleProductSec() {
    return (
        <>
            <DynamicHeroSec backgroundImage={heroBg} title="NEW BMW 3 SERIES" content="NEW BMW 3 SERIES" />
            <div className='single__product__handler'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="right__content__handler">
                                <div className="card__list__titels">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <>
                                            <div className="card__title">
                                                
                                                    <div className="label">
                                                        Certified Used 2021
                                                    </div>
                                                    New BMW 3 series
                                                
                                            </div>
                                        </>
                                        <>
                                            <div className="cart__price ">
                                                <>
                                                <div className="old__price">
                                                    $25000
                                                </div>
                                                <div className="new__price">
                                                  $20000
                                                </div>
                                                </>
                                            </div>
                                        </>
                                    </div>
                                </div>
                                <div className="product__slider_imgs">
                                    <Swiper
                                        style={{
                                            '--swiper-navigation-color': '#fff',
                                            '--swiper-pagination-color': '#fff',
                                        }}
                                        loop={true}
                                        spaceBetween={10}
                                        navigation={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper2"
                                    >
                                        <SwiperSlide>
                                            <div className="single__box__handler">
                                                <div className="single__img__handler">
                                                    <img src={img1} alt="" />
                                                </div>
                                                <div className="img__card__badge">
                                                    special
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single__box__handler">
                                                <div className="single__img__handler">
                                                    <img src={img2} alt="" />
                                                </div>
                                                <div className="img__card__badge">
                                                    special
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single__box__handler">
                                                <div className="single__img__handler">
                                                    <img src={img3} alt="" />
                                                </div>
                                                <div className="img__card__badge">
                                                    special
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single__box__handler">
                                                <div className="single__img__handler">
                                                    <img src={img4} alt="" />
                                                </div>
                                                <div className="img__card__badge">
                                                    special
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <Swiper
                                        //  style={{
                                        //     '--swiper-navigation-color': '#fff',
                                        // }}
                                        loop={true}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        // navigation={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper mt-3"
                                    >
                                        <SwiperSlide>
                                            <img src={img1} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img2} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img3} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={img4} alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="left__content__handler">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
