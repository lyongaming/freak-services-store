import React from "react";
import { useNavigate } from "react-router-dom";

import "./UserOption.css";

export const UserOption = ({ name }) => {

  const navigate = useNavigate();

  const redirectToServices = () => navigate("/services");

  return (
    <div className="hand">
        <div className="userCard">
        <img src="leon no sleep.jpg" alt={ name } />
      </div>
      <div className="user-content">
        <h2 className="rank">
          <small onClick={ redirectToServices }> &gt;&gt; </small>
        </h2>
        <h4>{ name }</h4>
      </div>
    </div>
  );
};