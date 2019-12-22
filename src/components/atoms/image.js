import React from "react";

const Image = ({ url, altName, imageClass }) => (
  <img className={imageClass} alt={altName} src={url} />
);

export default Image;
