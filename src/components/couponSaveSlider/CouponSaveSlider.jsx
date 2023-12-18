import React from 'react'
import './couponSaveSlider.css'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Swal from 'sweetalert2';

import coupon from '../../assets/saveHomeImg/print_coupon.jpg'
import jsPDF from 'jspdf';
import { scrollToTop } from '../../functions/scrollToTop';
export default function CouponSaveSlider({ title, saveSlides }) {

    const showCoupon = (slide) => {
        Swal.fire({
            html: `
            <div class="saveModalBody__handler">
                <div class="modal__logo">
                    <img src="${slide.couponImg}" alt="" />
                </div>
                <p class='saveModal__title'>
                    ${slide.couponOffer}
                </p>
                <div class='saveModal__subTit'>
                    <img src="${coupon}" alt="" id="couponImage"/>
                </div>
                <div class="saveModal__code">
                        <div id="saveButton" class="getCode viewCoupon">
                            save as PDF
                        </div>
                        <p id="downloadButton" class='viewCoupon__download'>
                            or download as image
                        </p>
                </div>
                <div class="saveModal__info">
                    <p class='desc'>
                    Unlock unbeatable discounts with our exclusive coupon codes—don't miss out on savings!
                    </p>
                </div>
                <div class="saveModal__footer">
                    <p>
                        Share this coupon now.
                    </p>
                    <div class="copyRights__social">
                    <ul>
                        <li>
                            <NavLink class='nav-link copyRigths__icon__link'>
                                <i class="bi bi-facebook"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink class='nav-link copyRigths__icon__link'>
                                <i class="bi bi-twitter"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink class='nav-link copyRigths__icon__link'>
                                <i class="bi bi-linkedin"></i>
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
`,
            showCloseButton: true,
            showConfirmButton: false,
        });

        const saveButton = document.getElementById('saveButton');
        const downloadButton = document.getElementById('downloadButton');
        saveButton.addEventListener('click', () => {
            // Print as PDF
            const couponImage = document.getElementById('couponImage');
            const pdf = new jsPDF();
            pdf.addImage(couponImage.src, 'PNG', 10, 10, 190, 100);
            pdf.save('coupon.pdf');
        });

        downloadButton.addEventListener('click', () => {
            // Download the image
            const couponImage = document.getElementById('couponImage');
            const link = document.createElement('a');
            link.href = couponImage.src;
            link.download = 'coupon_image.png';
            link.click();
        });
    }
    return (

        <div className='couponSlider__handler'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="couponSlider__head">
                            <h3>
                                {title}
                            </h3>
                            <NavLink to={`/save/${title}`} className="nav-link couponSlider__head__link" onClick={() => {
                                scrollToTop();
                            }}>
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
                                                    <p className='card__offer'>{slide.couponOffer}
                                                    </p>
                                                    <div className="couponSlider__info__btns row">
                                                        <div onClick={() => showCoupon(slide)} className="col-lg-12 getCode viewCoupon">
                                                            view copoun
                                                        </div>
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
