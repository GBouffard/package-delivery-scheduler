import React from "react";

import DeliveryHeader from "./components/organisms/delivery-header";
import DeliveryFooter from "./components/organisms/delivery-footer";
import GoogleMap from "./components/molecules/google-map";

const App = () => (
  <div>
    <GoogleMap />
    <DeliveryHeader />
    <div id="desktop-filler__container">
      <div id="desktop-filler__fill"></div>
    </div>
    <DeliveryFooter />
  </div>
);

export default App;
