import React from "react";

import Image from "../atoms/image";

const baseUrl = process.env.PUBLIC_URL;

const DeliveryInformation = () => (
  <div id="delivery-information">
    <Image
      url={`${baseUrl}/images/fedEx-logo.png`}
      altName="FedEx logo"
      imageClass="company-logo-style"
    />
    <div>Out for delivery time</div>
  </div>
);

export default DeliveryInformation;
