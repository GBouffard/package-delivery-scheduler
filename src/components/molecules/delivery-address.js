import React from "react";

import DeliveryOption from "./common/delivery-option";
import { postcodeMap } from "../../data/location-mocks";

const DeliveryAddress = ({ selectedPlace, onClick }) => (
  <DeliveryOption
    onClick={onClick}
    icons={[{ name: "map-marker-alt", isFar: false }]}
    text={selectedPlace}
    subtext={postcodeMap[selectedPlace]}
    deliveryOptionClass="delivery-address"
  />
);

export default DeliveryAddress;
