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
import avatar from '../../assets/cardImgs/ava.jpg'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SingleProductSec() {
    const [mainImageSrc, setMainImageSrc] = useState(img1); // Initial main image source

    const handleThumbnailClick = (newSrc) => {
        setMainImageSrc(newSrc);
    };
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
                                                    <img className='img__view' src={mainImageSrc} alt="" />
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
                                        {[
                                            { id: 1, src: img1 },
                                            { id: 2, src: img2 },
                                            { id: 3, src: img3 },
                                            { id: 4, src: img4 },
                                        ].map((thumbnail) => (
                                            <SwiperSlide key={thumbnail.id}>
                                                <img
                                                    className='img__list'
                                                    src={thumbnail.src}
                                                    alt=""
                                                    onClick={() => handleThumbnailClick(thumbnail.src)}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="product__detailes">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="box__detail d-flex justify-content-between align-items-center">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Body</span>
                                                </div>
                                                <div className="item__title">
                                                    Hatchback
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span title='Transmission'>Transmission</span>
                                                </div>
                                                <div title='Manuel' className="item__title">
                                                    Manuel
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Year</span>
                                                </div>
                                                <div title='2021' className="item__title">
                                                    2021
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Color</span>
                                                </div>
                                                <div title='Obsidian Black Metallic' className="item__title">
                                                    Obsidian Black Metallic
                                                </div>

                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>History</span>
                                                </div>
                                                <div className="item__title">
                                                    N/A
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="box__detail d-flex justify-content-between align-items-center">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Make</span>
                                                </div>
                                                <div title='BMW' className="item__title">
                                                    BMW
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Fuel</span>
                                                </div>
                                                <div title='Gasoline' className="item__title">
                                                    Gasoline
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Mileage</span>
                                                </div>
                                                <div title='50000 mi' className="item__title">
                                                    50000 mi
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Interior</span>
                                                </div>
                                                <div title='Grey' className="item__title">
                                                    Grey
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Stock</span>
                                                </div>
                                                <div title='153093' className="item__title">
                                                    153093
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="box__detail d-flex justify-content-between align-items-center">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Body</span>
                                                </div>
                                                <div className="item__title">
                                                    Hatchback
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Model</span>
                                                </div>
                                                <div title='M5' className="item__title">
                                                    M5
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Engine</span>
                                                </div>
                                                <div title='6,2L V8' className="item__title">
                                                    6,2L V8
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Drive</span>
                                                </div>
                                                <div title='RWD' className="item__title">
                                                    RWD
                                                </div>
                                            </div>
                                            <div className="box__detail d-flex justify-content-between">
                                                <div className="item__label d-flex align-items-center">
                                                    <i class="bi bi-car-front-fill"></i>
                                                    <span>Register</span>
                                                </div>
                                                <div title='N/A' className="item__title">
                                                    N/A
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__features">
                                    <h1>Features</h1>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="feature__box">
                                                <h4>Comfort</h4>
                                                <ul>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>A/C: Front</span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>
                                                            Backup Camera
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>
                                                            Cruise Control
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>Navigation</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="feature__box">
                                                <h4>Entertainment</h4>
                                                <ul>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>MP3 Player</span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>
                                                            Premium Audio
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>
                                                            AM/FM Stereo
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>DVD System</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="feature__box">
                                                <h4>Safety</h4>
                                                <ul>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>Airbag: Driver</span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>
                                                            Airbag: Passenger
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>
                                                            Security System
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>Antilock Brakes</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="feature__box">
                                                <h4>Seats</h4>
                                                <ul>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>Heated Seats</span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>
                                                            Power Seats
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>
                                                            Bucket Seats
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <i class="bi bi-check-circle-fill"></i>
                                                        <span>Memory Seats</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__seller__notes">
                                    <h1>
                                        SELLER'S NOTES
                                    </h1>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p>
                                                Fusce viverra, ligula quis pellentesque interdum, leo felis congue dui, ac accumsan sem nulla id lorem. Praesent ut tristique dui, nec condimentum lacus. Maecenas lobortis ante id egestas placerat. Nullam at ultricies lacus. Nam in nulla consectetur, suscipit mauris eu, fringilla augue. Phasellus gravida, dui quis dignissim tempus, tortor orci tristique leo, ut congue diam ipsum at massa. Pellentesque ut vestibulum erat. Donec a felis eget tellus laoreet ultrices.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="left__content__handler">
                                <div className="dellar__info">
                                    <div className="user__main__info d-flex">
                                        <div className="user__img">
                                            <img src={avatar} alt="" />
                                        </div>
                                        <div className="user__name">
                                            <h3>talal ali</h3>
                                            <p>private seller</p>
                                        </div>
                                    </div>
                                    <div className="dellar__contacts">
                                        <div className="dellar__contact__item phone">
                                            <i class="bi bi-telephone-fill"></i>
                                            <span>(888) 999-9999</span>
                                        </div>
                                        <div className="dellar__contact__item whatsapp">
                                            <a href="https://wa.me/01005322028" target="_blank">
                                                <div className="whatsapp__btn">
                                                    <i class="bi bi-whatsapp"></i>
                                                    <span>CHAT VIA WHATSAPP</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="dellar__contact__item mail">
                                            <a href="mailto:talalhali86@gmail.com">
                                                <div className="email__btn">
                                                    <i class="bi bi-envelope-fill"></i>
                                                    <span>Message To Dealer</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="dellar__location">
                                        <div className="single__location__text">
                                            <i class="bi bi-geo-alt-fill"></i>
                                            <span>Boston, MA, United States</span>
                                        </div>
                                        <div className="map__Sec">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188820.14154020514!2d-70.80547133590112!3d42.31448584962796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2z2KjZiNiz2LfZhtiMINmF2KfYs9in2KrYtNmI2LPYqtiz2Iwg2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1701180541810!5m2!1sar!2seg"
                                                title='map_sec'
                                                style={{ border: '0' }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="message__Dellar__Sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="box__message__info">
                                    <div className="user__main__info d-flex">
                                        <div className="user__img">
                                            <img src={avatar} alt="" />
                                        </div>
                                        <div className="user__name">
                                            <h3>talal ali</h3>
                                            <p>private seller</p>
                                        </div>
                                    </div>
                                    <div className="dellar__contacts">
                                        <div className="dellar__contact__item phone">
                                            <i class="bi bi-telephone-fill"></i>
                                            <span>(888) 999-9999</span>
                                        </div>
                                        <div className="dellar__contact__item whatsapp">
                                            <a href="https://wa.me/01005322028" target="_blank">
                                                <div className="whatsapp__btn">
                                                    <i class="bi bi-whatsapp"></i>
                                                    <span>CHAT VIA WHATSAPP</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="form__dellar__contact">
                                    <div className="form__title">
                                        MESSAGE TO DEALER
                                    </div>
                                    <div className="form__contact">
                                        <form action="">
                                            <textarea class="form-control" rows="6" placeholder="your message"></textarea>
                                            <div className="form__inputs row" >
                                                <div class="my-3 col-lg-4">
                                                    <label class="">Name</label>
                                                    <input type="name" class="form-control" placeholder="your name" />
                                                </div>
                                                <div class="my-3 col-lg-4">
                                                    <label class="">Email</label>
                                                    <input type="email" class="form-control" placeholder="your email" />
                                                </div>
                                                <div class="my-3 col-lg-4">
                                                    <label class="">Number</label>
                                                    <input type="name" class="form-control" placeholder="your number" />
                                                </div>
                                            </div>
                                            <div className="form__submit">
                                                <div class="mb-3 form-check d-flex align-items-center">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">I accept the privacy policy</label>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Send Message</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
