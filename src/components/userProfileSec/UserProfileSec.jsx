import React, { useState } from 'react';
import './userProfileSec.css';
import AccordionFaqSave from '../accordionFaqSave/AccordionFaqSave';
import { useFormik } from 'formik';
import { UpdateProfileSchema } from '../../validation/updateProfileSchema';
import { baseURL } from '../../functions/BaseURL';
export default function UserProfileSec({ userData, countriesData }) {
    const [activeTab, setActiveTab] = useState('coins');
    const userDataArr = userData?.data?.user
    console.log(userDataArr);
    const [updateUser, setUpdateUser] = useState(false)
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const contactInfo = [
        {
            "id": 1,
            "icon": "bi bi-envelope-fill",
            "title": "email adress",
            "userInfo": `${userDataArr?.email}`
        },
        {
            "id": 2,
            "icon": "bi bi-telephone-fill",
            "title": "Mobile Number",
            "userInfo": `${userDataArr?.phone}`
        },
        {
            "id": 3,
            "icon": "bi bi-geo-alt-fill",
            "title": "Address",
            "userInfo": `${userDataArr?.address}`
        },
    ]
    const selectedCountryCode = countriesData?.find((country)=>country?.name === userDataArr?.country)
    const [currCountryCities, setCurrCountryCities] = useState([]);
    const [currChosenCity , setCurrChosenCity] = useState('')
    const [backEndErrors, setBackEndErrors] = useState(null);
  
    const [selectedCountry, setSelectedCountry] = useState(selectedCountryCode?.code);
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setCurrChosenCity('');
        const currCountrySelected = countriesData?.find(country => country?.code === e.target.value);
        values.country_id = currCountrySelected?.id;
        (async () => {
            const fetchData = await fetch(`${baseURL}/get-cities/${currCountrySelected.code}`);
            const res = await fetchData.json();
            setCurrCountryCities(res?.data?.cities);
        })();
    };
    const handleCityChange = (e) => {
        const selectedCity = currCountryCities?.find(city => city?.name === e?.target?.value);
        setCurrChosenCity(selectedCity.name);
        values.city_id = selectedCity?.id;
    }
    const onSubmit = async (values, actions) => {
        const isValid = await UpdateProfileSchema.validate(values)
    }
    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            first_name: userDataArr?.first_name,
            last_name: userDataArr?.last_name,
            zip_code: userDataArr?.zip_code,
            email: userDataArr?.email,
            phone: userDataArr?.phone,
            country_id: userDataArr?.country,
            city_id: userDataArr?.city,
            state: userDataArr?.state,
            image: userDataArr?.image
        },
        validationSchema: UpdateProfileSchema,
        onSubmit,
    });
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
                                <div className="col-lg-6">
                                    <div className="coin__score__card">
                                        <div className="score__number">
                                            {userDataArr?.coins}
                                            <span>coins</span>
                                        </div>
                                        <div className="gain__coins">
                                            <div className="coin__icon">
                                                <i className="bi bi-coin fs-4"></i>
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
                                        <div className={`profile__photo ${userDataArr?.classification ? userDataArr?.classification.toLowerCase() : ''}`}>
                                            <img src={userDataArr?.image} alt="profile_img" />
                                            <div className="photo__upload">
                                                <i className="bi bi-card-image"></i>
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
                                        <form onSubmit={handleSubmit} onBlur={handleBlur}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form__item mb-4">
                                                        <label htmlFor="" className='label mb-2'>
                                                            First Name
                                                        </label>
                                                        {
                                                            updateUser ?
                                                                <input
                                                                    onChange={handleChange}
                                                                    type="text"
                                                                    name="first_name"
                                                                    className='form-control'
                                                                    value={values?.first_name}
                                                                />
                                                                :
                                                                <input
                                                                    disabled
                                                                    type="text"
                                                                    name="first_name"
                                                                    className='form-control'
                                                                    value={values?.first_name}
                                                                />
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form__item mb-4">
                                                        <label htmlFor="" className='label mb-2'>
                                                            last Name
                                                        </label>
                                                        {
                                                            updateUser ?
                                                                <input
                                                                    onChange={handleChange}
                                                                    type="text"
                                                                    name="last_name"
                                                                    className='form-control'
                                                                    value={values?.last_name}
                                                                />
                                                                :
                                                                <input
                                                                    disabled
                                                                    type="text"
                                                                    name="last_name"
                                                                    className='form-control'
                                                                    value={values?.last_name}
                                                                />
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form__item mb-4">
                                                        <label htmlFor="" className='label mb-2'>
                                                            E-mail Address
                                                        </label>
                                                        {
                                                            updateUser ?
                                                                <input
                                                                    onChange={handleChange}
                                                                    type="text"
                                                                    name="email"
                                                                    className='form-control'
                                                                    value={values?.email}
                                                                />
                                                                :
                                                                <input
                                                                    disabled
                                                                    type="text"
                                                                    name="email"
                                                                    className='form-control'
                                                                    value={values?.email}
                                                                />
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form__item mb-4">
                                                        <label htmlFor="" className='label mb-2'>
                                                            Mobile Number
                                                        </label>
                                                        {
                                                            updateUser ?
                                                                <input
                                                                    onChange={handleChange}
                                                                    type="text"
                                                                    name="phone"
                                                                    className='form-control'
                                                                    value={values?.phone}
                                                                />
                                                                :
                                                                <input
                                                                    disabled
                                                                    type="text"
                                                                    name="phone"
                                                                    className='form-control'
                                                                    value={values?.phone}
                                                                />
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form__item mb-4">
                                                        <label htmlFor="" className='label mb-2'>
                                                            Address
                                                        </label>
                                                        {
                                                            updateUser ?
                                                                <input
                                                                    onChange={handleChange}
                                                                    type="text"
                                                                    name="state"
                                                                    className='form-control'
                                                                    value={values?.state}
                                                                />
                                                                :
                                                                <input
                                                                    disabled
                                                                    type="text"
                                                                    name="state"
                                                                    className='form-control'
                                                                    value={values?.state}
                                                                />
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form__item mb-4">
                                                        <label htmlFor="" className='label mb-2'>
                                                            Country
                                                        </label>
                                                        {
                                                            updateUser ?
                                                                //     <input
                                                                //     onChange={handleChange}
                                                                //     type="text"
                                                                //     name="country_id"
                                                                //     className='form-control'
                                                                //     value={values?.country_id}
                                                                // />
                                                                <select
                                                                    className={`form-select country__select w-100 `}
                                                                    aria-label="Default select example"
                                                                    id='registeration__form__country'
                                                                    name='country'
                                                                    value={selectedCountry}
                                                                    onChange={handleCountryChange}
                                                                >
                                                                    <option disabled value=''>Select Your Country</option>
                                                                    {
                                                                        countriesData?.map(country => {
                                                                            return (
                                                                                                                                                            <option key={country?.id} id={country?.code} value={country.code}>
                                                                                                                                                                {country?.name}
                                                                                                                                                            </option>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                                :
                                                                <input
                                                                    disabled
                                                                    type="text"
                                                                    name="country_id"
                                                                    className='form-control'
                                                                    value={values?.country_id}
                                                                />
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form__item">
                                                        <label htmlFor="" className='label'>
                                                            zip_code
                                                        </label>
                                                        {
                                                            updateUser ?
                                                                <input
                                                                    onChange={handleChange}
                                                                    name='zip_code'
                                                                    type="text" className='form-control'
                                                                    value={values?.zip_code}
                                                                />
                                                                :
                                                                <input
                                                                    disabled
                                                                    name='zip_code'
                                                                    type="text" className='form-control'
                                                                    value={values?.zip_code}
                                                                />
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="form__item">
                                                        <label htmlFor="" className='label'>
                                                            city
                                                        </label>
                                                        {
                                                            updateUser ?
                                                            <select
                                                            className={`form-select city__select w-100 
                                                            ${((errors?.city_id && touched.city_id) || backEndErrors?.city_id) ? 'input-error' : '' }`}
                                                            aria-label="Default select example"
                                                            name='city'
                                                            value={currChosenCity}
                                                            onChange={handleCityChange}
                                                        >
                                                            <option disabled value=''>Select Your City</option>
                                                            {
                                                                currCountryCities?.map(city=>{
                                                                    return (
                                                                        <option key={city?.id} value={city?.name}>
                                                                            {
                                                                                                                                                    city?.name
                                                                            }
                                                                        </option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                                :
                                                                <input
                                                                    disabled
                                                                    name='city_id'
                                                                    type="text" className='form-control'
                                                                    value={values?.city_id}
                                                                />
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-sm-12">
                                                    {
                                                        updateUser ?
                                                            <button type="submit" className="btn profile__btn__submit w-100">
                                                                Submit
                                                            </button>
                                                            :
                                                            <button onClick=
                                                                {
                                                                    () => setUpdateUser(!updateUser)
                                                                }
                                                                className="btn profile__btn__submit w-100 profile__btn__update">
                                                                Update
                                                            </button>
                                                    }
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
