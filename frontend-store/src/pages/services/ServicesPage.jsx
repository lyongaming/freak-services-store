import React from 'react'

import "./card.css";
import "./buttom.css";
import "./formservice.css";

export const ServicesPage = () => {
  return (
    <>
      <div className="container">
        <div className="cards">
            <div className="imgbox">
                <img src="Nautico.png" />
            </div>
            <div className="content">
                <div className="details">
                    <h2>Nyx<span>0000-0000-0001</span></h2>
                    <ul className="social_icons">
                        <li><i className="fa-solid fa-phone">+000 00000000000</i></li>
                        <li><i className="fa-solid fa-at">josem2740gmail.com</i></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>

    <div className="wrapper">
        <header>form servis</header>
        <div className="inputField">
            <input type="text" placeholder="service" />
            <button><i className="fas fa-plus"></i></button>
        </div>
        <ul className="allList">
            <li>alalalalalllalala  <span><i className="fas fa-trash"></i></span> </li>
        </ul>
      </div>
    </>
  )
}