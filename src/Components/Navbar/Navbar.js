import React from 'react';
import { useLocation } from "react-router-dom";

import './Navbar.css';
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
    const location = useLocation();

    return (
        <div>
            <Navbar expand="md" bg="dark" variant="dark" >
                <Container style={{ marginInline: '0px' }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={location.pathname}>
                            <Nav.Link href='/'>
                                Home
                            </Nav.Link>
                            <Nav.Link href='/products'>
                                Products
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

};

export default Navigation;