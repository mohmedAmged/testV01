import React from 'react'
import './productCard.css'
import CartTop from '../cartTop_part/CartTop'
import { NavLink } from 'react-router-dom'
export default function ProductCard() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="recent__cart__item">
                <CartTop />
                <div className="cart__bottom mt-2">
                    <div className="cart__main__titels">
                        <div className="d-flex align-items-center justify-content-between">
                            <>
                                <div className="cart__title">
                                    <NavLink to="/car-info" className="nav-link">
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
                    <div className="cart__list__meta">
                        <span>5 years</span>
                        <span>2 years</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
