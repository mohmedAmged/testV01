/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react'
import './myNav.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../functions/scrollToTop';
import logo2 from '../../assets/logo/weblogo copy.png'

export default function MyNav({ scrollToggle, countriesData }) {
    const navigate = useNavigate();
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const {pathname} = useLocation();

    const getCurrentCountryCode = () => {
        const locationArr = pathname.split("/");
        // countriesData?.map(country => {
        //     country?.code === locationArr[1] 
        //     && localStorage.setItem('curr-country' , locationArr[1]
        // )});
        if(!localStorage.getItem('curr-country')){
            navigate("/")
        } 
    }
    getCurrentCountryCode();

    const currentCountry = localStorage.getItem('curr-country');

    function handleOffcanvasToggle() {
        // setShowOffcanvas(!showOffcanvas);
        setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
    }

    const closeOffcanvas = () => {
        setShowOffcanvas(false);
    };

    const [selectedCountry, setSelectedCountry] = useState({});

    const handleSelectChange = (e) => {
        const selectedCode = e.target.value.toLowerCase();
        setSelectedCountry(selectedCode);
        localStorage.setItem('curr-country' , e.target.value);
        navigate(`/${selectedCode}`);
    };
    return (
        <div>
            <Navbar expand="lg" className={`nav__Bg ${scrollToggle ? "nav__fixed py-3 navTransformationDown" : "nav__absolute pb-3"} align-items-center`}>
                <Container>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <NavLink to={`/${currentCountry}`}>
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
                                to={`${currentCountry}/user/dashboard`}>
                                Dashboard
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                aria-label="Close"
                                className="nav-link  nav__link__style"
                                to={`/${currentCountry}/cars`}>
                                cars
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }

                                }
                                className="nav-link  nav__link__style"
                                to={`/${currentCountry}/discover`}>
                                Discover
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }
                                }
                                className="nav-link  nav__link__style"
                                to={`/${currentCountry}/save`}>
                                Save
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                className="nav-link  nav__link__style"
                                to={`/${currentCountry}/realestate`}>
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
                                to="">
                                <div className="custom-dropdown">
                                    <select className='select__country__style'
                                        // onChange={(e) => {
                                        //     navigate(`/${e.target.value}`)
                                        // }}
                                        onChange={handleSelectChange}
                                        value={selectedCountry || ''}

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
                                    <div className="flag-preview">
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
                                    </div>
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
                                <NavLink to={`/${currentCountry}`} className="px-4">
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
                                    to={`/${currentCountry}/user/dashboard`}>
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    aria-label="Close"
                                    className="nav-link  nav__link__style"
                                    to={`/${currentCountry}/cars`}>
                                    cars
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }
                                    }
                                    className="nav-link  nav__link__style"
                                    to={`/${currentCountry}/discover`}
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
                                    to={`/${currentCountry}/save`}>
                                    Save
                                </NavLink>
                                <NavLink
                                    onClick={() => {
                                        scrollToTop();
                                        closeOffcanvas();
                                    }}
                                    className="nav-link  nav__link__style"
                                    to={`/${currentCountry}/realestate`}>
                                    Raal Estate
                                </NavLink>
                                <NavLink onClick={() => {
                                    scrollToTop();
                                    closeOffcanvas();
                                }}
                                    className="nav-link nav__link__style"
                                    to={`/${currentCountry}`}>
                                    <div className='btn__Car d-flex justify-content-center align-items-center'>
                                        <i className="bi bi-folder-plus fs-6"></i>
                                        <span>
                                            Sign Up
                                        </span>
                                    </div>
                                </NavLink>
                                <NavLink onClick={() => {
                                    scrollToTop();
                                    closeOffcanvas();
                                }}
                                    className="nav-link nav__link__style"
                                    to="">
                                    <select className='select__country__style'
                                        onChange={(e) => {
                                            navigate(`/${e.target.value}`)
                                        }}
                                        defaultValue={currentCountry}
                                        >
                                        {
                                            countriesData?.map((country) => (
                                                <option className='select__country__option__style' key={country?.id} value={country?.code} title={country?.name}>
                                                    {country?.code}
                                                </option>
                                            ))
                                        }
                                    </select>
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
