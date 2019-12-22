import React from "react";

import Icon from "../../atoms/icon";
import Text from "../../atoms/text";

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

    {text && (
      <Text
        text={text}
        subtext={subtext}
        textClass={`${classname}__text-container`}
      />
    )}
  </div>
);

export default DeliveryOption;
