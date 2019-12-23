import React from "react";

import Icon from "../../atoms/icon";
import Text from "../../atoms/text";
import Link from "../../atoms/link";

const DeliveryOption = ({
  icons,
  text,
  subtext,
  link,
  onClick,
  deliveryOptionClass
}) => (
  <div className={`delivery-option ${deliveryOptionClass}`} onClick={onClick}>
    {icons &&
      icons.map(({ name, isFar, isSmall }) => (
        <Icon
          iconClass="delivery-option__icon"
          key={name}
          name={name}
          isFar={isFar}
          isSmall={isSmall}
        />
      ))}

    {text && (
      <Text
        text={text}
        subtext={subtext}
        textClass="delivery-option__text-container"
      />
    )}

    {link && <Link link={link} linkClass="delivery-option__link" />}
  </div>
);

export default DeliveryOption;
