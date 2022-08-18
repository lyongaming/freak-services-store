import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../../context";

import "./UserOption.css";

export const UserOption = ({ name }) => {

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const setUserInfo = async() => {
    const response = await fetch(`http://localhost:8080/users/${name}`);
    const data = await response.json();
    const user = {
      name: data.user_name,
      phone: data.user_phone,
      email: data.user_email
    }
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  const redirectToServices = () => {
    setUserInfo();
    navigate("/services");
  }

  return (
    <div className="user-option">
      <div className="userCard">
        <img src="leon no sleep.jpg" alt={name} />
      </div>
      <div className="user-content">
        <h2 className="toServicesPageBtn">
          <small onClick={redirectToServices}> &gt;&gt; </small>
        </h2>
        <h4>{name}</h4>
      </div>
    </div>
  );
};