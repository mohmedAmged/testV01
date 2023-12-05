import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DiscoverLocationCard({ imageSrc, country, adsCount, colSize }) {
    return (
        <div className={`col-lg-${colSize} col-md-6 col-sm-12`}>
            <div className="discover__location__card">
                <div className="discover__location__image">
                    <img src={imageSrc} alt="" />
                </div>
                <div className="discover__location__caption">
                    <div className="discover__icon__caption">
                        <span>
                            <i className="bi bi-geo-alt-fill"></i>
                        </span>
                    </div>
                    <div className="discover__text__caption">
                        <h4>
                            <NavLink className="nav-link">
                                {country}
                            </NavLink>
                        </h4>
                        <p>
                            {`${adsCount} ads posted in this location`}
                        </p>
                        <div className="ads__link">
                            <NavLink className="nav-link">
                                view all ads
                                <i className="bi bi-arrow-right"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
