import React from 'react'
import './briefAboutUs.css'
import logo1 from '../../assets/logo/coverLogo.png'
export default function BriefAboutUs() {
  return (
    <div className='briefAboutUs__Sec'>
      <div className="container">
        <div className="briefAboutUs__handler">
            <div className="row justify-content-center">
                <div className="col-lg-12 d-flex justify-content-center">
                    <div className="brief__box">
                        <div className="brief__logo d-flex justify-content-center">
                            <img src={logo1} alt="" />
                        </div>
                        <div className="breif__title d-flex justify-content-center">
                            <h1>
                                About Us
                            </h1>
                        </div>
                        <div className="brief__text d-flex justify-content-center">
                            <p>
                            Welcome to ValidCars, your trusted destination for premium and certified pre-owned vehicles in Cyprus. We specialize in connecting discerning buyers with a curated selection of new and certified used cars, all backed by valid warranties from official dealers in Cyprus. Our user-friendly platform makes car shopping a breeze, offering an extensive range of choices to suit every preference. Whether you're seeking a reliable sedan, a versatile SUV, or a sporty coupe, ValidCars is your go-to source for quality automobiles in Cyprus. Explore our listings, and let us help you find your dream car today! 
                            </p>
                        </div>
                        <div className="brief__end__line">
                            <div className="line__one line"></div>
                            <div className="line__two line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
