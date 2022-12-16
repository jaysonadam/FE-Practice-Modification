import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {

    return (
        <div>
            {/* <Navbar> */}
                {/* <Nav> */}
                    <NavLink to='/' activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}>
                        Home
                    </NavLink>
                    <NavLink to='/products' activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}>
                        Products
                    </NavLink>
                {/* </Nav> */}
            {/* </Navbar> */}
        </div>
    )

};

export default Navigation;