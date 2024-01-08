import React from 'react'
import './pageNotFound.css'
import { NavLink } from 'react-router-dom'
import notFoundImg from '../../assets/pageNotFoundImgs/404.webp'
export default function PageNotFound() {
    return (
        <div className='pageNotFound__handler'>
            <div className="overlay"></div>
                <div className="container">
                    {/* <div className="image__notfound mt-3"></div> */}
                    <img src={notFoundImg} className='mt-3' alt="" />
                    <div className="pageNotFound__content">
                        <h1 className='pt-5'>page not found</h1>
                        <p className='my-6'>
                            Sorry, the page that you are looking for doesn't exist. Please make sure that you typed the correct URL page Link, and then try again.
                        </p>
                        <NavLink className="nav-link pageNotFound__link" to={`/`}>
                            go to home
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}
