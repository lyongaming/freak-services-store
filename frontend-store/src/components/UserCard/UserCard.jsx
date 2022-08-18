import React from "react";
import { useContext } from "react";

import { UserContext } from "../../context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./UserCard.css";

export const UserCard = () => {

  let { user } = useContext(UserContext);

  if(localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  return (
    <div className="cards">
      <div className="imgbox">
        <img src="Nautico.png" alt="ola" />
      </div>
      <div className="content">
        <div className="details">
            <h2>
              { user.name }
            <br />
          </h2>
          <ul className="social_icons">
            <li>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>{ user.phone }</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faAt} className="icon" />
              <span>{ user.email }</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};