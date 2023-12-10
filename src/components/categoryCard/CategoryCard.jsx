import React from 'react'
import './categoryCard.css'
import { NavLink } from 'react-router-dom'
export default function CategoryCard({ category, imgSrc, adsCount, subcategories, iconClass }) {
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className="discover__category__card__box">
                <figure>
                    <div className="discover__categ__img">
                        <img src={imgSrc} alt="" />
                        <div className="overlay"></div>
                        <span>
                            <i className={iconClass}></i>
                        </span>
                    </div>
                    <div className="discover__categ__info">
                        <NavLink to={`/discover/category/${category}`} className="nav-link">
                            <h4>{category}</h4>
                        </NavLink>
                        <p>{`${adsCount} Ads posted`}</p>
                        <ul>
                            {subcategories.map((subcategory, index) => (
                                <li key={index}>
                                    <NavLink className="nav-link">
                                        <i className="bi bi-chevron-right"></i>
                                        {subcategory}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="discover__view">
                            <NavLink className="nav-link">
                                view all ads
                                <i className="bi bi-arrow-right"></i>
                            </NavLink>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    );
}
