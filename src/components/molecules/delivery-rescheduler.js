import React from "react";

import DeliveryOption from "./common/delivery-option";

const DeliveryRescheduler = () => (
  <DeliveryOption
    icons={[{ name: "clock", isFar: true }]}
    text="Not in?"
    link="Find a better time"
  />
);

export default DeliveryRescheduler;
