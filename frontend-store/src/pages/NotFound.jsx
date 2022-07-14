import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./error.css";

export const NotFound = () => {

  const backgroundRef = useRef();
  const navigate = useNavigate();

  const goToHome = () => navigate("/");

  const moveBackground = ({ clientX, clientY }) => {
    const x = - clientX/5; 
    const y = - clientY/5;
    backgroundRef.current.style.backgroundPositionX = x + 'px';
    backgroundRef.current.style.backgroundPositionY = y + 'px';
  }

  return (
    <div id="container" ref={ backgroundRef } onMouseMove={ moveBackground }>
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