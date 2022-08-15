import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./UserCard.css";

export const UserCard = () => {
  return (
    <div className="cards">
      <div className="imgbox">
        <img src="Nautico.png" alt="ola" />
      </div>
      <div className="content">
        <div className="details">
          <h2>
            Nyx
            <br />
            <span>0000-0000-0001</span>
          </h2>
          <ul className="social_icons">
            <li>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>+000 00000000000</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faAt} className="icon" />
              <span>josem2740gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};