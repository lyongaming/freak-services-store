import React from 'react'

import "./card.css";
import "./buttom.css";
import "./formservice.css";

export const ServicesPage = () => {
  return (
    <>
      <div class="container">
        <div class="cards">
            <div class="imgbox">
                <img src="Nautico.png" />
            </div>
            <div class="content">
                <div class="details">
                    <h2>Nyx<span>0000-0000-0001</span></h2>
                    <ul class="social_icons">
                        <li><i class="fa-solid fa-phone">+000 00000000000</i></li>
                        <li><i class="fa-solid fa-at">josem2740gmail.com</i></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>

    <div class="wrapper">
        <header>form servis</header>
        <div class="inputField">
            <input type="text" placeholder="service" />
            <button><i class="fas fa-plus"></i></button>
        </div>
        <ul class="allList">
            <li>alalalalalllalala  <span><i class="fas fa-trash"></i></span> </li>
        </ul>
      </div>
    </>
  )
}