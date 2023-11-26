import React from 'react'
import './recentSec.css'
import { NavLink } from 'react-router-dom'
import ProductCard from '../productCard/ProductCard'
export default function RecentSec() {
    return (
        <div className='recent__Sec'>
            <div className="container">
                <div className="recent__cart__handler">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className='mb-3 recent__head'>
                                recent cars
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
                    <div className="btn__show__more mt-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <div className="show__handler">
                                    <NavLink className="nav-link">
                                        Show More
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
