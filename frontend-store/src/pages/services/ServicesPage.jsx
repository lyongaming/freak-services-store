import React, { useState } from "react";

import { UserCard, ServicesForm, InvoiceModal } from "../../components";

import "./ServicePage.css";

export const ServicesPage = () => {

  const [services, setServices] = useState([]);

  return (
    <>
      <div className="service-page_container">
        <UserCard />
      </div>
      <ServicesForm services={ services } setServices={ setServices } />
      <InvoiceModal />
    </>
  );
};