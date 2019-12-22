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

library.add(
  fas,
  far,
  faClock,
  faPencilAlt,
  faMapMarkerAlt,
  faCommentAlt,
  faQuestion
);

const Icon = ({ name, isFar, isSmall, iconClass }) => (
  <div className="icon-container">
    <FontAwesomeIcon
      size={isSmall ? "xs" : "2x"}
      className={`${iconClass} ${isSmall ? "question-mark-icon" : ""}`}
      icon={[isFar ? "far" : "fas", name]}
    />
  </div>
);

export default Icon;
