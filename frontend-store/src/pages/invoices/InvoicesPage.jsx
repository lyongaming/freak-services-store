import React from "react";

import "./InvoicesPage.css";
import { Invoice } from "../../components";

export const InvoicesPage = () => {
  return (
    <section className="card-list">
        <Invoice />
    </section>
  )
}