import React, { useState } from 'react';
import './userProfileSec.css';
import profile from '../../assets/dashboardImgs/profile.jpeg'
import AccordionFaqSave from '../accordionFaqSave/AccordionFaqSave';
export default function UserProfileSec() {
    const [activeTab, setActiveTab] = useState('coins');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const contactInfo = [
        {
            "id": 1,
            "icon": "bi bi-envelope-fill",
            "title": "email adress",
            "userInfo": "example@gamil.com"
        },
        {
            "id": 2,
            "icon": "bi bi-telephone-fill",
            "title": "Mobile Number",
            "userInfo": "0100533229"
        },
        {
            "id": 3,
            "icon": "bi bi-geo-alt-fill",
            "title": "Address",
            "userInfo": "nyc, florida"
        },
    ]
    const formItems = [
        {
            "id": 1,
            "labelName": "first name",
            "value": "mohamed"
        },
        {
            "id": 3,
            "labelName": "first name",
            "value": "amged"
        },
        {
            "id": 3,
            "labelName": "E-mail Address",
            "value": "eaxample@gmail.com"
        },
        {
            "id": 4,
            "labelName": "Mobile Number",
            "value": "0100533229"
        },
        {
            "id": 5,
            "labelName": "Address",
            "value": "nyc, florida"
        },
        {
            "id": 6,
            "labelName": "state",
            "value": "florida"
        },
    ]
    const formItemsRows = [
        {
            "id": 1,
            "labelName": "Zip Code",
            "value": "11865"
        },
        {
            "id": 3,
            "labelName": "City",
            "value": "florida"
        },
        {
            "id": 3,
            "labelName": "Country",
            "value": "NYC"
        },
    ]
    return (
        <div className='userProfileSec__handler'>
            <div className="container">
                <div className="ads__filter__tabs">
                    <div className="row">
                        <div className="col-lg-8">
                            <ul>
                                <li id='coins' className={`mb-2 ads__tab ${activeTab === 'coins' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('coins')}
                                >
                                    Coins
                                </li>
                                <li id='dashboard' className={`mb-2 ads__tab ${activeTab === 'dashboard' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('dashboard')}
                                >
                                    Dashboard
                                </li>
                                <li id='wishlist' className={`mb-2 ads__tab ${activeTab === 'wishlist' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('wishlist')}
                                >
                                    Wishlist
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {renderSection(activeTab)}
            </div>
        </div>
    );

    function renderSection(tabId) {
        switch (tabId) {
            case 'coins':
                return (
                    <div className="coin__handler" key={tabId}>
                        <h3 className='dash__title'>
                                my coins
                        </h3>
                        <div className="Coin__Sec" >
                            
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="coin__score__card">
                                        <div className="score__number">
                                            1,286
                                            <span>coins</span>
                                        </div>
                                        <div className="gain__coins">
                                            <div className="coin__icon">
                                                <i class="bi bi-coin fs-4"></i>
                                            </div>
                                            <div className="howGain__coin">
                                                get more coins
                                                <i className="bi bi-chevron-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className='dash__title'>
                                how to gain coins
                        </h3>
                        <div className="coin__faq">
                            <div className="row">
                                <div className="col-lg-10">
                                    <AccordionFaqSave />
                                </div>
                            </div>
                        </div>
                    </div>

                );
            case 'dashboard':
                return (
                    <div className="dashboardSec__handler" key={tabId}>
                        <div className="row gy-4">
                            <div className="col-lg-4">
                                <div className="dashboardSec__left">
                                    <div className="dashboardProfile__image">
                                        <div className="profile__photo">
                                            <img src={profile} alt="profile_img" />
                                            <div className="photo__upload">
                                                <i class="bi bi-card-image"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashboardProfile__contact">
                                        <h3 className='dash__title'>personal information</h3>
                                        {
                                            contactInfo.map((info) => (
                                                <div className=
                                                    "dashboardProfile__contact__info" key={info.id}>
                                                    <div className="info__title">
                                                        <i className={info.icon}></i>
                                                        <span>{info.title}</span>
                                                    </div>
                                                    <p>{info.userInfo}</p>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="profile__update">
                                    <h3 className='dash__title'>
                                        update profile
                                    </h3>
                                    <div className="user__profile__update">
                                        <form action="">
                                            <div className="row">
                                                {
                                                    formItems.map((item) => (
                                                        <div className="col-lg-6" key={item.id}>
                                                            <div className="form__item mb-4">
                                                                <label htmlFor="" className='label mb-2'>
                                                                    {item.labelName}
                                                                </label>
                                                                <input type="text" className='form-control'
                                                                    value={item.value}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                            <div className="row mb-2">
                                                {
                                                    formItemsRows.map((item) => (
                                                        <div className="col-sm-4">
                                                            <div className="form__item">
                                                                <label htmlFor="" className='label'>
                                                                    {item.labelName}
                                                                </label>
                                                                <input type="text" className='form-control'
                                                                    value={item.value}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-sm-12">
                                                    <button type="submit" class="btn profile__btn__submit w-100">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'wishlist':
                return (
                    <div className="wishlistSec__handler" key={tabId}>

                    </div>
                );
            default:
                return null;
        }
    }
}
