import React from "react";

const OutForDeliveryTime = ({ from, to }) => (
  <div id="out-for-delivery">
    <div id="out-for-delivery__label">Out for delivery</div>
    <div id="out-for-delivery__time">{`${from} - ${to}`}</div>
  </div>
);

export default OutForDeliveryTime;
