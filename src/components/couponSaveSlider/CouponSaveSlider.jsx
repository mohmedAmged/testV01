import React from 'react'
import './couponSaveSlider.css'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function CouponSaveSlider({ title, saveSlides }) {
    return (
        <div className='couponSlider__handler'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="couponSlider__head">
                            <h3>
                                {title}
                            </h3>
                            <NavLink className="nav-link couponSlider__head__link">
                                view more
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="couponSlider__cards">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                breakpoints={{
                                    320: {

                                        slidesPerView: 1.2,
                                        spaceBetween: 20
                                    },
                                    480: {

                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    768: {

                                        slidesPerView: 2.2,
                                        spaceBetween: 30
                                    },
                                    992: {
                                        slidesPerView: 3.5,
                                        spaceBetween: 30
                                    },
                                }}
                                className="mySwiper">
                                {
                                    saveSlides.map((slide) => (
                                        <SwiperSlide key={slide.id}>
                                            <div className="couponSlider__card__item">
                                                <div className="couponSlider__cardHead">
                                                    <button>
                                                        <i class="bi bi-suit-heart"></i>
                                                    </button>
                                                    <div className="tags">
                                                        <i class="bi bi-gem"></i>
                                                        <p>{slide.tagName}</p>
                                                    </div>
                                                </div>
                                                <div className="couponSlider__img">
                                                    <img src={slide.couponImg} alt="" />
                                                </div>
                                                <div className="couponSlider__info">
                                                    <p className='card__offer'>{slide.couponOffer}</p>
                                                    <div className="getCode">
                                                        get code
                                                    </div>
                                                    <p className='card__expire'>Expire at: {slide.expDate}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
