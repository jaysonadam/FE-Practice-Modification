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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={location.pathname}>
                            <Nav.Link href='/'>
                                Home
                            </Nav.Link>
                            <Nav.Link href='/products'>
                                Bike Catalogue
                            </Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <img src={require('../../Images-Videos/images/ktm-logo.jpg')} className='ktm'/>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

};

export default Navigation;