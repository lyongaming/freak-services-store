import React from "react";
import { useContext } from "react";

import { UserContext } from "../../context";

import "./InvoiceModal.css";

export const InvoiceModal = ({ cart, show, showModal }) => {

  const { id } = JSON.parse(localStorage.getItem("user"));

  const classes = ["modal-container"];

  const totalAmount = cart.reduce((amount, service) => (
    amount + service.service_cost
  ), 0);

  if(show) {
    classes.push("show-modal");
  }

  const hideModal = () => {
    showModal(false);
  }

  const makePurchase = () => {
    const purchase = {
      userID: id,
      totalAmount,
      services: cart
    }

    const response = fetch("http://localhost:8080/invoices", {
      method: "POST",
      body: JSON.stringify(purchase)
    })
  }

  return (
    <section className="modal">
      <div className={ classes.join(" ") } id="modal-container">
        <div className="modal__content">
          <img src="logo.png" alt="aaaaa" className="modal_img" />

          <h1 className="modal__title">Services Selected</h1>
          <h1 className="modal__title"> { totalAmount } </h1>
          <div className="selected-services_container">
            <ul className="selected-services">
              {
                cart.map(service => (
                  <li key={ service.service_id }>{ service.service_name }</li>
                ))
              }
            </ul>
          </div>

          <button className="modal__button" onClick={ makePurchase } >
            confirm shop
          </button>
          <button className="modal__button-link close-modal" onClick={ hideModal } >
            Cancel process
          </button>
        </div>
      </div>
    </section>
  );
};