import React from "react";

import { UserInfo } from "./UserInfo/UserInfo";

import "./Invoice.css";

import { PurchasedServices } from "./PurchasedServices/PurchasedServices";
import { InvoiceButtons } from "./InvoiceButtons/InvoiceButtons";

export const Invoice = () => {
  return (
    <article className="card">
      <header className="card-header">
        <p>invoice</p>
      </header>
      <PurchasedServices />
      <UserInfo />
      <InvoiceButtons />
    </article>
  );
};
