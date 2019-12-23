import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const baseUrl = process.env.PUBLIC_URL;

// the Eiffel tower
const defaultPosition = {
  lat: 48.858608,
  lng: 2.294471
};

export const MapContainer = ({ google, position = defaultPosition }) => (
  <Map
    //   mapTypeId={"terrain"}
    google={google}
    zoom={16}
    className="delivery-map"
    initialCenter={position}
    zoomControl={false}
    rotateControl={false}
    scaleControl={false}
    mapTypeControl={false}
    streetViewControl={false}
    fullscreenControl={false}
  >
    <Marker
      name={"delivery address"}
      icon={`${baseUrl}/images/custom-blue-dot-marker.png`}
    />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(MapContainer);
