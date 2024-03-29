import React, { useState } from "react";
import { useEffect } from "react";

import { UserCard, ServicesForm, InvoiceModal } from "../../components";

import "./ServicePage.css";

export const ServicesPage = () => {

  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart"));
    if(currentCart && (currentCart.length !== 0)) {
      setCart(currentCart);
    }
  }, []);

  return (
    <>
      <div className="service-page_container">
        <UserCard />
      </div>
      <ServicesForm cart={ cart } setCart={ setCart } changeShowModal={ setShowModal } />
      <InvoiceModal cart={ cart } show={ showModal } showModal={ setShowModal }  />
    </>
  );
};