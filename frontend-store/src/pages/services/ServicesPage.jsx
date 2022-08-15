import React from "react";

import { UserCard, ServicesForm } from "../../components";

import "./ServicePage.css";

export const ServicesPage = () => {
  return (
    <>
      <div className="service-page_container">
        <UserCard />
      </div>
      <ServicesForm />
    </>
  );
};
