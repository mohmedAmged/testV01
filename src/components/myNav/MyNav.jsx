import React, { useState } from 'react'
import './myNav.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../functions/scrollToTop';
// import logo1 from '../../assets/logo/weblogo.png'
import logo2 from '../../assets/logo/weblogo copy.png'
export default function MyNav({ scrollToggle }) {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    function handleOffcanvasToggle() {
        setShowOffcanvas(!showOffcanvas);
    }
    return (
        <div>
            <Navbar expand="lg" className={`nav__Bg ${scrollToggle ? "nav__fixed py-3 navTransformationDown" : "nav__absolute pb-3"} align-items-center`}>
                <Container>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <NavLink to="/">
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
                                to="/cars">
                                cars
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }

                                }
                                className="nav-link  nav__link__style"
                                to="/discover">
                                Discover
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                className="nav-link  nav__link__style"
                                to="/realestate">
                                Raal Estate
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }

                                }
                                className="nav-link  nav__link__style"
                                to="/about">
                                Save
                            </NavLink>

                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                className="nav-link  nav__link__style"
                                to="/contact">
                                Develop
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                className="nav-link  nav__link__style"
                                to="/contact">
                                Engage
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
                                    Add your item
                                    </span>
                                </div>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    {/* end navbar min-width 992px */}
                    {/* start navbar min-width 320px */}
                    <Navbar.Offcanvas id="offcanvasNavbar" className='Navbar__offCanvas__none__on__lg' aria-labelledby="offcanvasNavbarLabel"
                        show={showOffcanvas} onHide={handleOffcanvasToggle}
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='offCanvas__head' id="offcanvasNavbarLabel">
                                <NavLink to="/" className="px-4">
                                    <img className='logo__Width' src={logo2} alt="logo__canvas" />
                                </NavLink>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="mx-auto" >
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                aria-label="Close"
                                className="nav-link  nav__link__style"
                                to="/cars">
                                cars
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }

                                }
                                className="nav-link  nav__link__style"
                                to="/discover">
                                Discover
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                className="nav-link  nav__link__style"
                                to="/realestate">
                                Raal Estate
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }

                                }
                                className="nav-link  nav__link__style"
                                to="/about">
                                Save
                            </NavLink>

                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                className="nav-link  nav__link__style"
                                to="/contact">
                                Develop
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollToTop();
                                }}
                                className="nav-link  nav__link__style"
                                to="/contact">
                                Engage
                            </NavLink>
                                <NavLink onClick={() => {
                                    scrollToTop();
                                }}
                                className="nav-link nav__link__style"
                                to="/">
                                <div className='btn__Car d-flex justify-content-center align-items-center'>
                                <i className="bi bi-folder-plus fs-6"></i>
                                    <span>
                                    Add your item
                                    </span>
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
