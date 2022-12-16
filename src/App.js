import React from "react";
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";

function App() {
    return (
        <Router>
            <Route path='/' element={<Home />}/>
        </Router>
    )
};

export default App;
