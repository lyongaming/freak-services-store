import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav>
          <ul class="nav-bar">
              <li><NavLink to="/" className={({ isActive }) => 
                isActive ? "link active" : "link"
              }>home</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => 
                isActive ? "link active" : "link"
              }>buy now</NavLink></li>
              <li><NavLink to="/historial" className={({ isActive }) => 
                isActive ? "link active" : "link"
              }>historial</NavLink></li>
              <li><NavLink to="/invoices" className={({ isActive }) => 
                isActive ? "link active" : "link"
              }>invoices</NavLink></li>
          </ul> 
      </nav>
          <NavLink to="/login" className={({ isActive }) => 
            isActive ? "login active" : "login"
          }>login</NavLink>
    </header>
  );
}