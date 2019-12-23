import React from "react";

import DeliveryAddress from "../molecules/delivery-address";
import DeliveryNotification from "../molecules/delivery-notification";

const DeliveryFooter = ({ selectedPlace }) => (
  <div id="delivery-footer">
    <DeliveryAddress selectedPlace={selectedPlace} />
    <DeliveryNotification />
  </div>
);

export default DeliveryFooter;
