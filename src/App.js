import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home/home";
import Riders from "./Pages/riders/riders";
import Profile from "./Pages/profile/profile";
import Products from "./Pages/products/products";
import Navigation from "./Components/Navbar/Navbar";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/riders/:id' element={<Riders />}/>
                <Route path='/products' element={<Products />}/>
            </Routes>
        </Router>
    )
};

export default App;
