import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  fas,
  faClock,
  faPencilAlt,
  faMapMarkerAlt,
  faCommentAlt,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
// faPen, faMapMarker

library.add(
  fas,
  far,
  faClock,
  faPencilAlt,
  faMapMarkerAlt,
  faCommentAlt,
  faQuestion
);

const Icon = ({ name, isFar }) => (
  <FontAwesomeIcon icon={[isFar ? "far" : "fas", name]} />
);

export default Icon;
