import React from "react";

const Text = ({ text, subtext, textClass }) => (
  <div className={`${textClass} ${subtext ? "" : "one-line-height"}`}>
    <div>{text}</div>
    {subtext && <div className="subText">{subtext}</div>}
  </div>
);

export default Text;
