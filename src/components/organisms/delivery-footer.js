import React from "react";

import DeliveryAddress from "../molecules/delivery-address";
import DeliveryNotification from "../molecules/delivery-notification";

const DeliveryFooter = () => (
  <div id="delivery-footer">
    <DeliveryAddress />
    <DeliveryNotification />
  </div>
);

export default DeliveryFooter;
