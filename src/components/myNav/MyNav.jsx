/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react'
import './myNav.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../functions/scrollToTop';
import logo2 from '../../assets/logo/weblogo copy.png'
import { currCountryCode } from '../../functions/BaseURL';

export default function MyNav({ scrollToggle, countriesData }) {
    const navigate = useNavigate();
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    // const {pathname, search} = useLocation();
    // console.log(pathname);
    // console.log(search);
    // const clearCountryFromPathName =()=>{
    //     const pathNameArr = pathname.split('/')
    //     pathNameArr.shift()
    //     pathNameArr.shift()
    //     console.log(pathNameArr.join('/'));
    //     return pathNameArr.join('/')
    // }
    // clearCountryFromPathName()
    useEffect(() => {
        if (!currCountryCode) {
            navigate("/")
        }
    }, [currCountryCode, navigate])


    function handleOffcanvasToggle() {
        // setShowOffcanvas(!showOffcanvas);
        setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
    }

    const closeOffcanvas = () => {
        setShowOffcanvas(false);
    };

    // const [selectedCountry, setSelectedCountry] = useState({});

    const handleSelectChange = (e) => {
        // const selectedCode = e.target.value.toLowerCase();
        // setSelectedCountry(selectedCode);
        localStorage.setItem('curr-country', e.target.value);
        navigate(`/${e.target.value}`);
        window.location.reload()

    };
    return (
        <div>
            <Navbar expand="lg" className={`nav__Bg ${scrollToggle ? "nav__fixed py-3 navTransformationDown" : "nav__absolute pb-3"} align-items-center`}>
                <Container>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <NavLink to={`/${currCountryCode}`}>
                            <img className='logo__Width' src={logo2} alt="main__logo" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={handleOffcanvasToggle} aria-controls="basic-navbar-nav" />
                    {/* start navbar min-width 992px */}
                    <Navbar.Collapse id="navbar-nav" className='Navbar__Collapse__none__on__med'>
                        <Nav className="mx-auto" >
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                aria-label="Close"
                                className="nav-link  nav__link__style"
                                to={`${currCountryCode}/user/dashboard`}>
                                Dashboard
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();  
                                }}
                                aria-label="Close"
                                className="nav-link  nav__link__style"
                                to={`/${currCountryCode}/cars`}
                                >
                                cars
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }

                                }
                                className="nav-link  nav__link__style"
                                to={`/${currCountryCode}/discover`}>
                                Discover
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }
                                }
                                className="nav-link  nav__link__style"
                                to={`/${currCountryCode}/save`}>
                                Save
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                className="nav-link  nav__link__style"
                                to={`/${currCountryCode}/realestate`}>
                                Raal Estate
                            </NavLink>
                        </Nav>
                        <Nav>
                            <NavLink onClick={() => {
                                scrollToTop();
                            }}
                                className="nav-link nav__link__style"
                                to="/">
                                <div className='btn__Car d-flex justify-content-center align-items-center'>
                                    <i className="bi bi-folder-plus fs-6"></i>
                                    <span>
                                        Sign Up
                                    </span>
                                </div>
                            </NavLink>
                            <NavLink
                                className="nav-link nav__link__style"
                            >
                                <div className="custom-dropdown">
                                    <select className='select__country__style'
                                        // onChange={(e) => {
                                        //     navigate(`/${e.target.value}`)
                                        // }}
                                        onChange={handleSelectChange}
                                        value={currCountryCode || ''}

                                    >
                                        <option disabled>Select Country</option>
                                        {
                                            countriesData?.map((country) => (
                                                <option className='select__country__option__style'
                                                    key={country?.id}
                                                    value={country?.code}
                                                    title={country?.name}
                                                >
                                                    {country?.code}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    {/* <div className="flag-preview">
                                        {selectedCountry && (
                                            <img
                                                src={
                                                    countriesData?.map((country)=>(
                                                        country?.flag
                                                    ))
                                                }
                                                alt="Selected Flag"
                                            />
                                        )}
                                    </div> */}
                                </div>

                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    {/* end navbar min-width 992px */}
                    {/* start navbar min-width 320px */}
                    <Navbar.Offcanvas
                        id="offcanvasNavbar" className='Navbar__offCanvas__none__on__lg' aria-labelledby="offcanvasNavbarLabel"
                        show={showOffcanvas}
                        onHide={handleOffcanvasToggle}
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='offCanvas__head' id="offcanvasNavbarLabel">
                                <NavLink to={`/${currCountryCode}`} className="px-4">
                                    <img className='logo__Width' src={logo2} alt="logo__canvas" />
                                </NavLink>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="mx-auto" >
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className="nav-link  nav__link__style"
                                    to={`/${currCountryCode}/user/dashboard`}>
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className="nav-link  nav__link__style"
                                    to={`/${currCountryCode}/cars`}>
                                    cars
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }
                                    }
                                    className="nav-link  nav__link__style"
                                    to={`/${currCountryCode}/discover`}
                                >
                                    Discover
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }
                                    }
                                    className="nav-link  nav__link__style"
                                    to={`/${currCountryCode}/save`}>
                                    Save
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    className="nav-link  nav__link__style"
                                    to={`/${currCountryCode}/realestate`}>
                                    Raal Estate
                                </NavLink>
                                <NavLink onClick={() => {
                                    scrollToTop();
                                    closeOffcanvas();
                                }}
                                    className="nav-link nav__link__style"
                                    to={`/${currCountryCode}`}>
                                    <div className='btn__Car d-flex justify-content-center align-items-center'>
                                        <i className="bi bi-folder-plus fs-6"></i>
                                        <span>
                                            Sign Up
                                        </span>
                                    </div>
                                </NavLink>
                                <NavLink onClick={() => {
                                    scrollToTop();
                                }}
                                    className="nav-link nav__link__style"
                                    >
                                    {/* <select className='select__country__style'
                                        onChange={(e) => {
                                            navigate(`/${e.target.value}`)
                                        }}
                                        defaultValue={currCountryCode}
                                        >
                                        {
                                            countriesData?.map((country) => (
                                                <option className='select__country__option__style' key={country?.id} value={country?.code} title={country?.name}>
                                                    {country?.code}
                                                </option>
                                            ))
                                        }
                                    </select> */}
                                    <div className="custom-dropdown">
                                        <select className='select__country__style'
                                            onChange={handleSelectChange}
                                            value={currCountryCode || ''}
                                        >
                                            <option disabled>Select Country</option>
                                            {
                                                countriesData?.map((country) => (
                                                    <option className='select__country__option__style'
                                                    
                                                        key={country?.id}
                                                        value={country?.code}
                                                        title={country?.name}
                                                    >
                                                        {country?.code}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        {/* <div className="flag-preview">
                                        {selectedCountry && (
                                            <img
                                                src={
                                                    countriesData?.map((country)=>(
                                                        country?.flag
                                                    ))
                                                }
                                                alt="Selected Flag"
                                            />
                                        )}
                                    </div> */}
                                    </div>
                                </NavLink>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    {/* end navbar min-width 320px */}
                </Container>
            </Navbar>
        </div>
    )
}
