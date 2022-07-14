import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
        <ul class="nav-bar">
            <li><NavLink to="/login" className={({ isActive }) => 
              isActive ? "link active" : "link"
            }>register</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => 
              isActive ? "link active" : "link"
            }>buy now</NavLink></li>
            <li><NavLink to="/" className={({ isActive }) => 
              isActive ? "link active" : "link"
            }>home</NavLink></li>
        </ul> 
    </nav>
  );
}