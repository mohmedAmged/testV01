import React from 'react'
import './savePopuCategory.css'
import { NavLink } from 'react-router-dom'
// import icon1 from '../../assets/saveHomeImg/icon1.gif'
export default function SavePopuCategory({ couponCards }) {

  return (
    <div className='savePopularCategory__handler'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="couponSlider__head">
              <h3>
                Popular Categories
              </h3>
              <NavLink className="nav-link couponSlider__head__link">
                view more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row gy-4 ">
          {
            couponCards.map((couponCard) => (
              <div key={couponCard?.id} className="col-lg-3 col-md-6 col-sm-6">
                <div className="couponCategoryCard">
                  <div className="couponCategoryCard__img">
                    <img src={couponCard.icon} alt="icon__one" />
                  </div>
                  <h3 className='couponCategoryCard__tit'>
                    <NavLink className="nav-link">
                      {couponCard.Title}
                    </NavLink>
                  </h3>
                  <p className='couponCategoryCard__subTit'>
                    {couponCard.couponNum} coupons
                  </p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}
