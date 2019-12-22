import React from "react";

import Image from "../atoms/image";
import OutForDeliveryTime from "./out-for-delivery-time";

const baseUrl = process.env.PUBLIC_URL;

const DeliveryInformation = () => (
  <div id="delivery-information">
    <Image
      url={`${baseUrl}/images/fedEx-logo.png`}
      altName="FedEx logo"
      imageClass="company-logo-style"
    />
    <OutForDeliveryTime from="13:30" to="14:40" />
  </div>
);

export default DeliveryInformation;
