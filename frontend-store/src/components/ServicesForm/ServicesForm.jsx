import React from "react";

import "./buttom.css";
import "./formservice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";

export const ServicesForm = () => {
  return (
    <div className="wrapper">
      <header>Services</header>
      <div className="inputField">
        <input type="text" list="services" placeholder="service" />
        <datalist id="services">
          <option value="Xbox Game Pass"></option>
          <option value="Play Station +"></option>
          <option value="Club Fortnite"></option>
          <option value="Netflix"></option>
          <option value="Amazon prime"></option>
          <option value="Ninstendo switch online"></option>
        </datalist>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <ul className="allList">
        {/* <li>alalalalalllalala  <span><i className="fas fa-trash"></i></span> </li> */}
        {/* <li>alalalalalllalala  <span><i className="fas fa-trash"></i></span> </li> */}
      </ul>
      <div className="footer">
        <button
          style={{ "--clr": "rgb(16,124,248)" }}
          className="modal__button"
          id="open-modal"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <button className="deleteAll" style={{ "--clr": "#e74c3c" }}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};