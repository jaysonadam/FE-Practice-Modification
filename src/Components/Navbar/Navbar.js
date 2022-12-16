import React from 'react';
import { useLocation } from "react-router-dom";

import './Navbar.css';
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
    const location = useLocation();

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav activeKey={location.pathname}>
                    <Nav.Link href='/'>
                        Home
                    </Nav.Link>
                    <Nav.Link href='/products'>
                        Products
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )

};

export default Navigation;