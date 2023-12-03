import React from 'react'
import './categoryCard.css'
import cardImg from '../../assets/discoverHomeImg/sedan.png'
import { NavLink } from 'react-router-dom'
// export default function CategoryCard() {
//     return (
//         <div className='col-lg-4 col-md-6 col-sm-12'>
//             <div className="discover__category__card__box">
//                 <figure>
//                     <div className="discover__categ__img">
//                         <img src={cardImg} alt="" />
//                         <div className="overlay"></div>
//                         <span>
//                             <i class="bi bi-car-front"></i>
//                         </span>
//                     </div>
//                     <div className="discover__categ__info">
//                         <h4>Cars</h4>
//                         <p>0 Ads posted</p>
//                         <ul>
//                             <li>
//                                 <NavLink className="nav-link">
//                                     <i class="bi bi-caret-right"></i>
//                                     Auto Parts
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink className="nav-link">
//                                     <i class="bi bi-caret-right"></i>
//                                     Auto Parts
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink className="nav-link">
//                                     <i class="bi bi-caret-right"></i>
//                                     Auto Parts
//                                 </NavLink>
//                             </li>
//                         </ul>
//                         <div className="discover__view">
//                             <NavLink className="nav-link">
//                                 view all ads
//                                 <i class="bi bi-arrow-right"></i>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </figure>
//             </div>
//         </div>
//     )
// }
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
                        <h4>{category}</h4>
                        <p>{`${adsCount} Ads posted`}</p>
                        <ul>
                            {subcategories.map((subcategory, index) => (
                                <li key={index}>
                                    <NavLink className="nav-link">
                                    <i class="bi bi-chevron-right"></i>
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
