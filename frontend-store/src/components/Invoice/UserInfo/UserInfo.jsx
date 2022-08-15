import React from "react";

import "./UserInfo.css";

export const UserInfo = () => {
  return (
    <div className="cart-user">
      <a href="#" className="user-avatar">
        <img src="undefine.jpg" alt="asdsada" />
      </a>
      <svg className="half-circle" viewBox="0 0 106 57">
        <path d="M102 4c0 27.1-27.9 49-49 49S4 31.1 4 4"></path>
      </svg>
      <div className="user-name">
        <div className="user-name-prefix">User</div>
        xxxxxxxxxxxxxxx
      </div>
    </div>
  );
};
