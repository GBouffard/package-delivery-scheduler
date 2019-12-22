import React from "react";

import DeliveryOption from "./common/delivery-option";

const DeliveryAddress = () => (
  <DeliveryOption
    icons={[{ name: "map-marker-alt", isFar: false }]}
    text="2400 Green St"
    subtext="CA 94123"
  />
);

export default DeliveryAddress;
