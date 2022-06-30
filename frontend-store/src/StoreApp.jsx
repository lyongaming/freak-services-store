import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageBackground } from './hocs/PageBackground';

import { LoginPage } from "./pages/LoginPage";
import { ServicesPage } from "./pages/ServicesPage";

import "./style.css";

export const StoreApp = () => {

    return (
        <Router>
            <Routes>
                <Route path='/login' element={ <PageBackground><LoginPage /></PageBackground> } />
                <Route path='/services' element={ <PageBackground><ServicesPage /></PageBackground> } />
            </Routes>
        </Router>
    );

}