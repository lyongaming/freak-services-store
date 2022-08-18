import React, { useState, useEffect } from "react";

import { useFetch } from "../../hooks";

import "./buttons.css";
import "./ServicesForm.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";

export const ServicesForm = () => {

  const [input, setInput] = useState("");

  const { data, error } = useFetch(`http://localhost:8080/services/${input}`);

  useEffect(() => {
    console.log(data ? data : []);
  }, [input]);
  
  const changeInput = e => {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <div className="service-form">
      <header>Services</header>
      <div className="inputField">
        <input type="text" list="services" value={ input } onChange={ changeInput } placeholder="service" />
        <datalist id="services">
          <option value="Xbox Game Pass"></option>
          <option value="Play Station +"></option>
          <option value="Club Fortnite"></option>
          <option value="Netflix"></option>
          <option value="Amazon prime"></option>
          <option value="Ninstendo switch online"></option>
        </datalist>
        <button className={ input ? "active" : "" }>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <ul className="added-services">
        <li>alalalalalllalala  <span><FontAwesomeIcon icon={ faTrash } /></span> </li>
        {/* <li>alalalalalllalala  <span><i className="fas fa-trash"></i></span> </li> */}
      </ul>
      <div className="service-form_buttons">
        <button
          style={{ "--clr": "rgb(16,124,248)" }}
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