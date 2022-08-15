import React from "react";

import "./InvoiceModal.css";

export const InvoiceModal = () => {
  return (
    <section className="modal modal-containerr">
      <div className="modal-container" id="modal-container">
        <div className="modal__content">
          <img src="logo.png" alt="aaaaa" className="modal_img" />

          <h1 className="modal__title">Service Selected</h1>
          <h1 className="modal__title">500$</h1>
          <div className="mostrador">
            <ul className="allList"></ul>
          </div>

          <button className="modal__button modal__button-width">
            shop confirmed
          </button>
          <button className="modal__button-link close-modal">
            Cancel process
          </button>
        </div>
      </div>
    </section>
  );
};