import React from "react";

import "./cardClient.css";

export const UserCard = ({ name }) => {
  return (
    <div className="hand">
        <div className="userCard">
        <img src="leon no sleep.jpg" alt={ name } />
      </div>
      <div className="content">
        <h2 className="rank">
          <small> &gt;&gt; </small>
        </h2>
        <h4>{ name }</h4>
      </div>
    </div>
  );
};