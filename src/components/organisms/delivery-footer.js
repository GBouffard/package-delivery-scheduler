import React from "react";

import DeliveryAddress from "../molecules/delivery-address";
import DeliveryNotification from "../molecules/delivery-notification";

const DeliveryFooter = ({ selectedPlace, onClick }) => (
  <div id="delivery-footer">
    <DeliveryAddress selectedPlace={selectedPlace} onClick={onClick} />
    <DeliveryNotification />
  </div>
);

export default DeliveryFooter;
