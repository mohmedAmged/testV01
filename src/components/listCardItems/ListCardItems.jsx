import React from 'react'
import CartTop from '../cartTop_part/CartTop'
import { NavLink } from 'react-router-dom'
import avatar1 from '../../assets/cardImgs/ava.jpg'
import './listCardItems.css'
export default function ListCardItems() {
    return (
        <div className='col-lg-12'>
            <div className="list__card__items">
                <div className="row">
                    <div className="col-lg-4">
                        <CartTop />
                    </div>
                    <div className="col-lg-8">
                        <div className="card__list__info__box">
                            <div className="card__list__titels">
                                <div className="d-flex align-items-center justify-content-between">
                                    <>
                                        <div className="card__title">
                                            <NavLink to="/car-info" className="nav-link">
                                                <div className="label">
                                                Certified Used 2021 
                                                </div>
                                                New BMW 3 series
                                            </NavLink>
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
                            <div className="card__list__middle row justify-content-between">
                                <div className="col-lg-3 col-md-3 col-sm-12 boxList__middle d-flex">
                                    <div className="middle__icon">
                                        <i class="bi bi-fuel-pump-fill"></i>
                                    </div>
                                    <div className="middle__desc">
                                        <div className="type">fuel type</div>
                                        <div className="name">Gasoline</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 boxList__middle d-flex">
                                    <div className="middle__icon">
                                        <i class="bi bi-fuel-pump-fill"></i>
                                    </div>
                                    <div className="middle__desc">
                                        <div className="type">engine</div>
                                        <div className="name">6,2L V8</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 boxList__middle d-flex">
                                    <div className="middle__icon">
                                        <i class="bi bi-fuel-pump-fill"></i>
                                    </div>
                                    <div className="middle__desc">
                                        <div className="type">Mileage</div>
                                        <div className="name">50000 mi</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 boxList__middle d-flex">
                                    <div className="middle__icon">
                                        <i class="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <div className="middle__desc">
                                        <div className="type">location</div>
                                        <div className="name">Boston</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card__list__bottom">
                                <div className="dellar__info d-flex">
                                    <div className="dellar__img">
                                        <img src={avatar1} alt="" />
                                    </div>
                                    <div className="dellar__info">
                                        <div className="dellar__name">
                                        Personal Seller: <span>talal ali</span>
                                        </div>
                                        <div className="dellar__phone">
                                            <i class="bi bi-telephone-fill"></i>
                                            <span>01005332208</span>
                                        </div>
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
