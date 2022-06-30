import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";

import "./style.css";

export const StoreApp = () => {

    return (
        <Router>
            <Routes>
                <Route path='/login' element={ <LoginPage /> } />
            </Routes>
        </Router>
    );

}