import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const baseUrl = process.env.PUBLIC_URL;

export const MapContainer = ({ google, position }) => (
  <Map
    //   mapTypeId={"terrain"}
    google={google}
    zoom={16}
    className="delivery-map"
    initialCenter={position}
    center={position}
    zoomControl={false}
    rotateControl={false}
    scaleControl={false}
    mapTypeControl={false}
    streetViewControl={false}
    fullscreenControl={false}
  >
    <Marker
      name={"delivery address"}
      position={position}
      icon={`${baseUrl}/images/custom-blue-dot-marker.png`}
    />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
})(MapContainer);
