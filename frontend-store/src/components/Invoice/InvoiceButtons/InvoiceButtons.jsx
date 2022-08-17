import React from "react";

import "./InvoiceButtons.css";

import { faBan, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InvoiceButtons = () => {
  return (
    <div className="footer">
      <button
        style={{ "--clr": "rgb(16, 124, 248)" }}
        id="open-modal"
      >
        <FontAwesomeIcon icon={faCheckDouble} />
      </button>
      <button className="deleteAll" style={{ "--clr": "#e74c3c" }}>
        <FontAwesomeIcon icon={faBan} />
      </button>
    </div>
  );
};
