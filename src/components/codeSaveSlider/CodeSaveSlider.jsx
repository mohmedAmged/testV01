import React from 'react'
import './codeSaveSlider.css'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Swal from 'sweetalert2';
export default function CodeSaveSlider({ title, saveSlides }) {
    const copyCodeToClipboard = (code) => {
        navigator.clipboard.writeText(code);
        Swal.fire({
            icon: 'success',
            title: 'Code Copied!',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const showModal = (slide) => {
        Swal.fire({
            html: `
            <div class="saveModalBody__handler">
                <div class="modal__logo">
                    <img src="${slide.couponImg}" alt="" />
                </div>
                <p class='saveModal__title'>
                    ${slide.couponOffer}
                </p>
                <p class='saveModal__subTit'>
                    Copy and paste this code
                </p>
                <div class="saveModal__code">
                    <input type="text" value="${slide.couponNum}" readOnly />
                    <button id="copyButton">
                    <i class="bi bi-copy"></i>
                    </button>
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

        const copyButton = document.getElementById('copyButton');
        copyButton.addEventListener('click', () => copyCodeToClipboard(slide.couponNum));
    }
    return (

        <div className='couponSlider__handler codeSlider__handler'>
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
                                                    <p className='card__offer'>{slide.couponOffer}
                                                    </p>
                                                    <div className="couponSlider__info__btns ">
                                                        <div onClick={() => showModal(slide)} className="getCode">
                                                            get code
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
