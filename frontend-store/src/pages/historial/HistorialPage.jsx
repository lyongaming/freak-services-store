import React from "react";

import { PurchaseInfo, SearchPurchases } from "../../components";

import "./HistorialPage.css";

export const HistorialPage = () => {
  return (
    <>
      <div className="historial-page">
        <header>Record</header>
        <SearchPurchases />  

        <div className="purchases">
          <div className="columns-names">
            <ul>
              <li>name</li>
              <li>ID</li>
              <li>e-mail</li>
              <li>inverted</li>
              <li>contract</li>
            </ul>
          </div>
          <PurchaseInfo />
        </div>
      </div>
    </>
  );
};