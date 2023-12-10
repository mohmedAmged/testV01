import React from 'react'
import './carInterestSec.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';


export default function CarInterestSec({interestItems}) {

    return (
        <div className='car__interest__Sec mb-5'>
            <div className="container">
                <div className="car__interest__handler">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="interest__text">
                                <h1>
                                    Browse Ready to buy cars by <span>Interest</span>
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Swiper
                                keyboard={true}
                                navigation={true}
                                cssMode={true}
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                className="mySwiper px-4"
                                modules={[Navigation, Keyboard]}
                            >
                                {
                                    interestItems.map((el) => {
                                        return (
                                            <SwiperSlide key={el?.id}>
                                                <div className="box__Item__int__handler d-flex justify-content-center">
                                                    <div className="box__int__item">
                                                        <div className="img__int__item">
                                                            <img src={el?.image} alt="logo__car" />
                                                        </div>
                                                        <p className='d-flex justify-content-center'>
                                                            {el?.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
