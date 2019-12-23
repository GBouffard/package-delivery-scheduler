import React from "react";

import DeliveryOption from "./common/delivery-option";

const DeliveryAddress = () => (
  <DeliveryOption
    icons={[{ name: "map-marker-alt", isFar: false }]}
    text="Champ de Mars, 5 Avenue Anatole"
    subtext="France, 75007 Paris, France"
  />
);

export default DeliveryAddress;
