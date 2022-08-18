import React from "react";

import "./InvoiceModal.css";

export const InvoiceModal = ({ cart, show, showModal }) => {

  const classes = ["modal-container"];

  if(show) {
    classes.push("show-modal");
  }

  const hideModal = () => {
    showModal(false);
  }

  return (
    <section className="modal">
      <div className={ classes.join(" ") } id="modal-container">
        <div className="modal__content">
          <img src="logo.png" alt="aaaaa" className="modal_img" />

          <h1 className="modal__title">Service Selected</h1>
          <h1 className="modal__title">{ 
            cart.reduce((amount, service) => (
              amount + service.service_cost
            ), 0) 
          }
          </h1>
          <div className="selected-services_container">
            <ul className="selected-services">
              {
                cart.map(service => (
                  <li key={ service.service_id }>{ service.service_name }</li>
                ))
              }
            </ul>
          </div>

          <button className="modal__button">
            shop confirmed
          </button>
          <button className="modal__button-link close-modal" onClick={ hideModal } >
            Cancel process
          </button>
        </div>
      </div>
    </section>
  );
};