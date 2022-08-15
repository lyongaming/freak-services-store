import React from 'react'

import { UserCard } from '../../components/UserCard/UserCard';

import "./ServicePage.css";
import "./buttom.css";
import "./formservice.css";

export const ServicesPage = () => {
  return (
    <>
      <div className="service-page_container">
        <UserCard />
      </div>

    {/* <div className="wrapper">
        <header>form servis</header>
        <div className="inputField">
            <input type="text" placeholder="service" />
            <button><i className="fas fa-plus"></i></button>
        </div>
        <ul className="allList">
            <li>alalalalalllalala  <span><i className="fas fa-trash"></i></span> </li>
        </ul>
      </div> */}
    </>
  )
}