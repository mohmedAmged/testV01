import React, { useState } from 'react'
import './register.css'
import { useFormik } from 'formik';
import { RegisterSchema } from '../../validation/RegisterSchema';
import { scrollToTop } from '../../functions/scrollToTop';
import { NavLink, useNavigate } from 'react-router-dom';
import { currCountryCode } from '../../functions/BaseURL';
export default function Register() {
    const navigate = useNavigate();
    const [showErrors, setShowErrors] = useState(false);
    const [backEndErrors, setBackEndErrors] = useState(null);
    const onSubmit = async (values, actions) => {
        const isValid = await RegisterSchema.validate(values);
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            address: "",
            zip_code: "",
            email: "",
            password: "",
            country_id: "",
            city_id: "",
            state: "",
            image: ""
        },
        validationSchema: RegisterSchema,
        onSubmit,
    });
    return (
        <div className='registerAndLogin__handler'>
            <div className="icon__routeBackToHome position-absolute" onClick={() => {
                (async () => {
                    await navigate(`/${currCountryCode}`);
                    window.scrollTo({
                        top: 210,
                    });
                })()
            }}>
                <i className="bi bi-box-arrow-left fs-1"></i>
            </div>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-10 registeration__form mx-auto">
                        <h2 className='text-center'>register</h2>
                        <form
                            action="Post"
                            className='px-5 pt-3 row m-0 gapY-3'
                            onSubmit={handleSubmit}
                            onBlur={handleBlur}
                        >

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-md-6 mb-4`}>
                                <input
                                    value={values.first_name}
                                    onChange={handleChange}
                                    type="text"
                                    id='first_name'
                                    name='first_name'
                                    placeholder='First Name'
                                    className={`first_name__input w-100`}
                                />
                                {/* {showErrors && <p className='text-danger text-capitalize'>{errors.first_name || backEndErrors?.first_name}</p>} */}
                            </div>

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-md-6 mb-4`}>
                                <input
                                    value={values.last_name}
                                    onChange={handleChange}
                                    type="text"
                                    id='last_name'
                                    name='last_name'
                                    placeholder='Last Name'
                                    className={`last_name__input w-100 `}
                                />
                                {/* {showErrors && <p className='text-danger text-capitalize'>{errors.last_name || backEndErrors?.last_name}</p>} */}
                            </div>

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-md-6 mb-4`}>
                                <select
                                    className={`form-select country__select w-100`}
                                    aria-label="Default select example"
                                    id='registeration__form__country'
                                    name='country'
                                >
                                    <option defaultChecked>Select Your Country</option>

                                </select>
                                {/* {showErrors && <p className='text-danger text-capitalize'>Required</p>} */}
                            </div>

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-md-6 mb-4`}>
                                <select
                                    className={`form-select city__select w-100`}
                                    aria-label="Default select example"
                                    id='registeration__form__city'
                                    name='city'
                                >
                                    <option defaultChecked>Select Your City</option>

                                </select>
                                {/* {showErrors && <p className='text-danger text-capitalize'>{errors.city || backEndErrors?.city}</p>} */}
                            </div>

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-md-12 mb-4`}>
                                <input
                                    value={values.address}
                                    onChange={handleChange}
                                    type="text"
                                    id='address'
                                    name='address'
                                    placeholder='Address'
                                    className={`registeration__form__address w-100 `}
                                />
                                {/* {showErrors && <p className='text-danger text-capitalize'>{errors.address || backEndErrors?.address}</p>} */}
                            </div>

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-md-6 mb-4`}>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder='Phone Number'
                                    className={`registeration__form__phone w-100`}
                                />
                                {/* {showErrors && <p className='text-danger text-capitalize'>{backEndErrors?.phone}</p>} */}
                            </div>

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-md-6 mb-4`}>
                                <input
                                    value={values.zip_code}
                                    onChange={handleChange}
                                    type="number"
                                    name="zip_code"
                                    id="zip_code"
                                    placeholder='Zip Code'
                                    className={`registeration__form__zip_code w-100 `}
                                />
                                {/* {showErrors && <p className='text-danger text-capitalize'>{errors.zip_code || backEndErrors?.zip_code}</p>} */}
                            </div>

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-md-12 mb-4`}>
                                <input
                                    value={values.email.trim()}
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='Email'
                                    className={`registeration__form__email w-100`}
                                />
                                {/* {showErrors && <p className='text-danger text-capitalize'>{errors.email || backEndErrors?.email}</p>} */}
                            </div>

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-md-12 mb-4`}>
                                <input
                                    value={values.password.trim()}
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    className={`registeration__form__password w-100 `}
                                />
                                {/* {showErrors && <p className='text-danger text-capitalize'>{errors.password || backEndErrors?.password}</p>} */}
                            </div>
                            <div className="registeration__form__btn mb-3 d-flex justify-content-end">
                                <button type='submit' onClick={() => setShowErrors(true)}
                                >Register</button>
                            </div>
                            <div className="col-12 text-light">
                                <span>Already have an account? </span>
                                <NavLink to={`/${currCountryCode}/login`} className="gotoLoginLink ms-2" onClick={() => scrollToTop()}>
                                    Login now
                                </NavLink>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
