import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Geocode from "react-geocode";

import DropDown from "./components/atoms/dropdown";
import DeliveryHeader from "./components/organisms/delivery-header";
import DeliveryFooter from "./components/organisms/delivery-footer";
import GoogleMap from "./components/molecules/google-map";

import { defaultLocation, placesList } from "./data/location-mocks";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
Geocode.setLanguage("en");
Geocode.enableDebug();

const reLoadMap = selectedLocation =>
  ReactDOM.render(
    <GoogleMap position={selectedLocation} />,
    document.getElementById("map-id")
  );

const App = () => {
  const [placeName, setPlaceName] = useState(placesList[0]);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

  const onChange = e => {
    setPlaceName(e.target.value);
    Geocode.fromAddress(e.target.value).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        setSelectedLocation({ lat: lat, lng: lng });
      },
      error => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    const mapLoader = setInterval(() => {
      reLoadMap(selectedLocation);
    }, 1000);

    return () => {
      clearInterval(mapLoader);
    };
  });

  return (
    <div>
      <div id="map-id"></div>
      <DeliveryHeader />
      <div id="desktop-filler__container">
        <div id="desktop-filler__fill"></div>
      </div>
      <DropDown
        places={placesList}
        onChange={onChange}
        dropdownClass="place-selector"
      />
      <DeliveryFooter selectedPlace={placeName} />
    </div>
  );
};

export default App;
