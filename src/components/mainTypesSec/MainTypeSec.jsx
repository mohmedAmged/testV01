import React from 'react'
import './mainTypeSec.css'
import { NavLink } from 'react-router-dom'
export default function MainTypeSec() {
    return (
        <div className='main__types__sec px-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="box__item__type p-4 blue__box">
                            <h1>
                                find New car
                            </h1>
                            <p>
                                explore brand mew cars provide by official dealers in cyprus, available <span>Today</span>, and make one yours
                            </p>
                            <NavLink className="nav-link btn__type">
                                new cars
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="box__item__type p-4 red__box">
                                <h1>
                                    certified used cars
                                </h1>
                                <p>
                                    your go-to destination for CPO cars in cyprus, offering detailed insights to help you find vicheles with confidence
                                </p>
                                <NavLink className="nav-link btn__type">
                                    used cars
                                </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
