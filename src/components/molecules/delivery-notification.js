import React from "react";

import DeliveryOption from "./common/delivery-option";

const DeliveryNotification = () => (
  <DeliveryOption
    icons={[
      { name: "comment-alt", isFar: true },
      { name: "question", isFar: false, isSmall: true }
    ]}
    text="Get notified instantly"
    link="Enable"
  />
);

export default DeliveryNotification;
