import React from 'react';
import { useLocation } from "react-router-dom";

import './Navbar.css';
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
    const location = useLocation();

    return (
        <div>
            <Navbar expand="md" bg="black" variant="dark">
                <Container className='con'>
                    <Navbar.Brand>
                        <img src={require('../../Images-Videos/images/ktm-logo.jpg')} className='ktm'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={location.pathname}>
                            <Nav.Link href='/'>
                                Home
                            </Nav.Link>
                            <Nav.Link href='/products'>
                                Bike Catalogue
                            </Nav.Link>
                            <Nav.Link href='/products'>
                                Racing Profile
                            </Nav.Link>
                        </Nav>

                        <Nav className="ms-auto me-2">
                            <Nav.Link href='https://www.instagram.com/ktmindonesiaofficial/' className='icons-nav'>
                                <i class="bi bi-instagram"></i>
                            </Nav.Link>
                            <Nav.Link href='https://mobile.twitter.com/RedBull_KTM_Ajo' className='icons-nav'>
                                <i class="bi bi-twitter"></i>
                            </Nav.Link>
                            <Nav.Link href='https://goo.gl/maps/hk4XYUDKvKd9FXri7' className='icons-nav'>
                                <i class="bi bi-geo-alt"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

};

export default Navigation;