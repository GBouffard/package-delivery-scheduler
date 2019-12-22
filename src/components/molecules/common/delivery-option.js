import React from "react";

import Icon from "../../atoms/icon";

const classname = "delivery-option";

const DeliveryOption = ({ icons, text, subtext, link }) => (
  <div className={classname}>
    {icons &&
      icons.map(({ name, isFar, isSmall }) => (
        <Icon
          iconClass={`${classname}__icon`}
          name={name}
          isFar={isFar}
          isSmall={isSmall}
        />
      ))}
  </div>
);

export default DeliveryOption;
