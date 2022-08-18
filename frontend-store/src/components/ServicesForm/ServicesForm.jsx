import React, { useState, useEffect } from "react";

import { Services } from "./Services/Services";

import { useFetch } from "../../hooks";

import "./buttons.css";
import "./ServicesForm.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";

export const ServicesForm = ({ services, setServices }) => {

  const [input, setInput] = useState("");

  const changeInput = e => {
    setInput(e.target.value);
  }

  const addService = async(e) => {
    e.preventDefault();

    if(input) {
      const response = await fetch(`http://localhost:8080/services/${input}`)
      const service = await response.json();
      setServices([...services, service]);
    }
  }

  return (
    <div className="service-form">
      <header>Services</header>
      <div className="inputField">
        <input type="text" list="services" value={ input } onChange={ changeInput } placeholder="service" />
        <Services />
        <button className={ input ? "active" : "" } onClick={ addService } >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <ul className="added-services">
        {
          services.map(service => {
            return <li key={ service.service_id } >{ service.service_name }<span><FontAwesomeIcon icon={ faTrash } /></span></li>
          })
        }
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