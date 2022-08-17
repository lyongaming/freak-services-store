import React from "react";

import "./HistorialPage.css";

export const HistorialPage = () => {
  return (
    <>
      <div className="historial-page">
        <header>Record</header>
        <div className="historial-page_search-input">
          <input type="format" placeholder="search" />
          <div className="order-by">
            <select name="format" id="format">
              <option selected disabled>
                order by
              </option>
              <option value="date">date</option>
              <option value="more buy">more buy</option>
            </select>
          </div>
        </div>

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
          <div className="purchase-info">
            <div className="imgBx">
              <img src="leon no sleep.jpg" />
            </div>
            <div className="content">
              <ul className="slot">
                <li>the lion</li>
                <li>xxx-xxx-xxx</li>
                <li>********@gmail.com</li>
                <li>0000$</li>
                <li>zzzzzzzzzzzzzzzzzzzzzzzzzzzzz</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};