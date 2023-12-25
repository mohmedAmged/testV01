import React from 'react'
import './mainHomeSlider.css'
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../functions/scrollToTop';
export default function MainHomeSlider({ homeSliderItems }) {
    // console.log(homeSliderItems);
    return (
        <div className='mainHomeSlider__handler my-5'>
            <div className="container">
                <div className="mainHomeSlider__cards">
                    {/* <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
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

                                slidesPerView: 2.3,
                                spaceBetween: 30
                            },
                            992: {
                                slidesPerView: 3.3,
                                spaceBetween: 30
                            },
                        }}
                        className="mySwiper">
                        {
                            homeSliderItems.map((item) => (
                                <SwiperSlide key={item.title}>
                                   
                                </SwiperSlide>
                            ))
                        }
                    </Swiper> */}
                    <div className="row">
                        {
                            homeSliderItems.map((item) => (
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-5" key={item.title}>
                                    <div className={`mainHomeSlider__card__item ${item.cardBg}`}>
                                        <div className="mainHomeSlider__card__title mb-4">
                                            <h2>
                                                {item.title}
                                            </h2>
                                        </div>
                                        <div className="mainHomeSlider__card__links">
                                            <ul>
                                                {
                                                    item.subCategory.map((el) => (
                                                        <li key={el.subTitle}>
                                                            <NavLink to={el.subLink}
                                                                onClick={() => {
                                                                    scrollToTop();
                                                                }} className="nav-link">
                                                                <i className="bi bi-emoji-wink-fill "></i>
                                                                <span>{el.subTitle}</span>
                                                            </NavLink>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="mainHomeSlider__card__icon">
                                            <NavLink to={item.mainLink}
                                                onClick={() => {
                                                    scrollToTop();
                                                }}
                                                className="nav-link">
                                                <i className="bi bi-arrow-right fs-3"></i>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
