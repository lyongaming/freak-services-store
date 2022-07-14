import React from "react";
import { useNavigate } from "react-router-dom";

import "./error.css";

export const NotFound = () => {

  const navigate = useNavigate();

  const goToHome = () => navigate("/");

  return (
    <div id="container">
      <div class="content">
        <h2>404</h2>
        <h4>Opps! page not found</h4>
        <p>
          the page you were looking for doesn´t exist. You may have mistyped the
          address or the page may have moved
        </p>
        <button type="button" onClick={ goToHome }>Back to Home</button>
      </div>
    </div>
  );
};