import React from 'react'
import './saveSubList.css'
import CodeSaveSlider from '../codeSaveSlider/CodeSaveSlider'
import coupon1 from '../../assets/saveHomeImg/couponImg.png'
import coupon2 from '../../assets/saveHomeImg/coupLogo2.png'
import coupon3 from '../../assets/saveHomeImg/coupLogo3.png'
import coupon4 from '../../assets/saveHomeImg/coupLogo4.png'
import Swal from 'sweetalert2'
const saveSlideOne = [
    { "id": 1, "tagName": "Exclusive", "couponImg": coupon1, "couponOffer": "5% Off Your Entire Cart", "expDate": "06-05-2025", "couponNum": 1254 },
    { "id": 2, "tagName": "Good", "couponImg": coupon2, "couponOffer": "10% Off Your Entire Cart", "expDate": "06-05-2025", "couponNum": 3254 },
    { "id": 3, "tagName": "Exclusive", "couponImg": coupon3, "couponOffer": "30% Off Your Entire Cart", "expDate": "06-10-2025", "couponNum": 1264 },
    { "id": 4, "tagName": "Sponsered", "couponImg": coupon4, "couponOffer": "70% Off Your Entire Cart", "expDate": "07-05-2025", "couponNum": 1854 },
    { "id": 5, "tagName": "Exclusive", "couponImg": coupon1, "couponOffer": "5% Off Your Entire Cart", "expDate": "06-05-2025", "couponNum": 9054 },
]
const categoryItems = [
    { "categName": "Tech Treats", "id": 1, "categFor": "categories-1" },
    { "categName": "Fashion Finds", "id": 2, "categFor": "categories-2" },
    { "categName": "Fashion Finds", "id": 2, "categFor": "categories-2" },
    { "categName": "Fashion Finds", "id": 2, "categFor": "categories-2" },
]
const storeItems = [
    { "categName": "Tech Treats", "id": 1, "categFor": "categories-1" },
    { "categName": "Fashion Finds", "id": 2, "categFor": "categories-2" },
    { "categName": "Fashion Finds", "id": 2, "categFor": "categories-2" },
    { "categName": "Fashion Finds", "id": 2, "categFor": "categories-2" },
]
export default function SaveSubList() {
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
        <div className='saveSubList__handler'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="saveSubList__left">
                            <form action="">
                                <input type="text" className='mb-4 form-control saveSub__input' placeholder='Search..' />
                            </form>
                            <div className="saveSubList__left__sidebar">
                                <div className="saveSubList__left__sidebar__categories">
                                    <h3 className='title'>
                                        Categories
                                    </h3>
                                    <div className="category__list">
                                        {
                                            categoryItems.map((item) => (
                                                <div key={item.id} className="check__ctegory__item mb-2 check__item">
                                                    <input className='form-check-input' type="checkbox" />
                                                    <label className='form-check-label' htmlFor={item.categFor}>{item.categName}
                                                    </label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="saveSubList__left__sidebar__categories">
                                    <h3 className='title'>
                                        stores
                                    </h3>
                                    <div className="stores__list">
                                        {
                                            storeItems.map((item) => (
                                                <div key={item.id} className="check__store__item check__item mb-2">
                                                    <input className='form-check-input' type="checkbox" />
                                                    <label className='form-check-label' htmlFor={item.categFor}>{item.categName}
                                                    </label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <>
                                {
                                    saveSlideOne.map((slide) => (
                                        <div className="col-lg-6 my-3">
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
                                        </div>
                                    ))
                                }

                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
