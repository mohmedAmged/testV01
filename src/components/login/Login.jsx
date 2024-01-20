import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { scrollToTop } from '../../functions/scrollToTop'
import { LoginSchema } from '../../validation/LoginSchema';
import { useFormik } from 'formik';
import { currCountryCode } from '../../functions/BaseURL';

export default function Login() {
  const navigate = useNavigate();
    const [showErrors, setShowErrors] = useState(false);
    const [backEndErrors, setBackEndErrors] = useState(null);
    const onSubmit = async (values, actions) => {
        const isValid = await LoginSchema.validate(values);

    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginSchema,
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
                    <div className='mx-auto registeration__form login__form col-md-8'>
                        <h2 className='text-center mb-4'>login</h2>
                        <form
                            action="Post"
                            className='px-5 m-0 pt-3 row gapY-3'
                            onSubmit={handleSubmit}
                            onBlur={handleBlur}
                        >

                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-12 mb-4`}>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='Email'
                                    onChange={handleChange}
                                    value={values.email.trim()}
                                    className={`loginForm__email w-100`}
                                />
                                {/* {showErrors && <p className='mb-4 text-danger text-capitalize'>{errors.email}</p>} */}
                            </div>
                            <div className={`${showErrors ? "mb-2" : "mb-4"} col-12 mb-4`}>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    onChange={handleChange}
                                    value={values.password.trim()}
                                    className={`loginForm__password w-100 `}
                                />
                                {/* {showErrors && <p className='mb-5 text-danger text-capitalize'>{errors.password}</p>} */}
                            </div>



                            <div className="registeration__form__btn d-flex justify-content-end mb-3">

                                <button type='submit' onClick={() => setShowErrors(true)}
                                >Login</button>
                            </div>
                            <div className="col-12 text-light">
                                <span>Don't Have and account?</span>
                                <NavLink to={`/${currCountryCode}/register`} onClick={() => scrollToTop()} className="gotoLoginLink ms-2">
                                    Create New Account
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
