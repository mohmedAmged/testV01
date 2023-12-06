import React from 'react'
import './discoverSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function DiscoverSlider({ title, subtitle, slides }) {
    return (
        // <div className='discoverSlider__handler'>
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-lg-8 col-md-8 col-sm-12">
        //                 <div className="discoverSlider__head">
        //                     <h3>
        //                         Most recommended food categories
        //                     </h3>
        //                     <p>
        //                         winning flavors for every appetite
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-12">
        //                 <div className="discoverSlider__cards">
        //                     <Swiper
        //                         slidesPerView={3.5}
        //                         spaceBetween={30}
        //                         className="mySwiper"
        //                     >
        //                         <SwiperSlide>
        //                             <div className="discoverSlider__card__item">
        //                                 <div className="overlay"></div>
        //                                 <div className="discoverSlider__img">
        //                                     <img src={foodImg} alt="food__img" />
        //                                 </div>
        //                                 <div className="discoverSlider__text">
        //                                     <h3>
        //                                         fine Dining
        //                                     </h3>
        //                                 </div>
        //                             </div>
        //                         </SwiperSlide>
        //                         <SwiperSlide>
        //                             <div className="discoverSlider__card__item">
        //                                 <div className="overlay"></div>
        //                                 <div className="discoverSlider__img">
        //                                     <img src={foodImg} alt="food__img" />
        //                                 </div>
        //                                 <div className="discoverSlider__text">
        //                                     <h3>
        //                                         fine Dining
        //                                     </h3>
        //                                 </div>
        //                             </div>
        //                         </SwiperSlide>
        //                         <SwiperSlide>
        //                             <div className="discoverSlider__card__item">
        //                                 <div className="overlay"></div>
        //                                 <div className="discoverSlider__img">
        //                                     <img src={foodImg} alt="food__img" />
        //                                 </div>
        //                                 <div className="discoverSlider__text">
        //                                     <h3>
        //                                         fine Dining
        //                                     </h3>
        //                                 </div>
        //                             </div>
        //                         </SwiperSlide>
        //                         <SwiperSlide>
        //                             <div className="discoverSlider__card__item">
        //                                 <div className="overlay"></div>
        //                                 <div className="discoverSlider__img">
        //                                     <img src={foodImg} alt="food__img" />
        //                                 </div>
        //                                 <div className="discoverSlider__text">
        //                                     <h3>
        //                                         fine Dining
        //                                     </h3>
        //                                 </div>
        //                             </div>
        //                         </SwiperSlide>
        //                         <SwiperSlide>
        //                             <div className="discoverSlider__card__item">
        //                                 <div className="overlay"></div>
        //                                 <div className="discoverSlider__img">
        //                                     <img src={foodImg} alt="food__img" />
        //                                 </div>
        //                                 <div className="discoverSlider__text">
        //                                     <h3>
        //                                         fine Dining
        //                                     </h3>
        //                                 </div>
        //                             </div>
        //                         </SwiperSlide>
        //                         <SwiperSlide>
        //                             <div className="discoverSlider__card__item">
        //                                 <div className="overlay"></div>
        //                                 <div className="discoverSlider__img">
        //                                     <img src={foodImg} alt="food__img" />
        //                                 </div>
        //                                 <div className="discoverSlider__text">
        //                                     <h3>
        //                                         fine Dining
        //                                     </h3>
        //                                 </div>
        //                             </div>
        //                         </SwiperSlide>
        //                     </Swiper>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="discoverSlider__handler">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="discoverSlider__head">
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="discoverSlider__cards">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                breakpoints={{
                                    320: {

                                        slidesPerView: 1.5,
                                        spaceBetween: 20
                                    },
                                    480: {

                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    600: {

                                        slidesPerView: 3.5,
                                        spaceBetween: 30
                                    },
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 30
                                    },
                                }}
                                className="mySwiper">
                                {slides.map((slide) => (
                                    <SwiperSlide key={slide.id}>
                                        <div className="discoverSlider__card__item">
                                            <div className="overlay"></div>
                                            <div className="discoverSlider__img">
                                                <img src={slide.image} alt={`food_${slide.id}`} />
                                            </div>
                                            <div className="discoverSlider__text">
                                                <h3>{slide.category}</h3>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
