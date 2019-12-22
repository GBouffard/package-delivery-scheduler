import React from "react";

import DeliveryInformation from "../molecules/delivery-information";
import DeliveryRescheduler from "../molecules/delivery-rescheduler";
import DeliveryNotes from "../molecules/delivery-notes";

const DeliveryHeader = () => (
  <div id="delivery-header">
    <DeliveryInformation />
    <DeliveryRescheduler />
    <DeliveryNotes />
  </div>
);

export default DeliveryHeader;
