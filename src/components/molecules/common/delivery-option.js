import React from "react";

import Icon from "../../atoms/icon";
import Text from "../../atoms/text";
import Link from "../../atoms/link";

const classname = "delivery-option";

const DeliveryOption = ({ icons, text, subtext, link }) => (
  <div className={classname}>
    {icons &&
      icons.map(({ name, isFar, isSmall }) => (
        <Icon
          iconClass={`${classname}__icon`}
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
        textClass={`${classname}__text-container`}
      />
    )}

    {link && <Link link={link} linkClass={`${classname}__link`} />}
  </div>
);

export default DeliveryOption;
