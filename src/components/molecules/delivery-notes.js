import React from "react";

import DeliveryOption from "./common/delivery-option";

const DeliveryNotes = () => (
  <DeliveryOption
    icons={[{ name: "pencil-alt", isFar: false }]}
    text="Add delivery notes"
  />
);

export default DeliveryNotes;
