import React from "react";

import "./SearchPurchases.css";

export const SearchPurchases = () => {
  return (
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
  );
};