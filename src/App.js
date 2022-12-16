import React from "react";
// import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";
import Products from "./Pages/products";
import Navigation from "./Components/Navbar/Navbar";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<Products />}/>
            </Routes>
        </Router>
    )
};

export default App;