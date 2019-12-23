import React from "react";

const Dropdown = ({ places, onChange, dropdownClass }) => (
  <select className={dropdownClass} name="place" onChange={onChange}>
    {places.map(place => (
      <option value={place} key={place}>
        {place}
      </option>
    ))}
  </select>
);

export default Dropdown;
