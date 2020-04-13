import React from "react";
import "./styles.scss";

const ZoneDropdown = (props) => {
  const renderZones = () => {
    const { zones } = props;
    if (zones) {
      return zones.map(zone => (
        <option key={zone._id} value={zone._id}>{zone.name}</option>
      ))
    }
  }

  return (
    <select className="form-control form-input" onChange={ (e) => props.onChange(e.target.value) }>
      <option value='null'>Ubicación</option>
      { renderZones() }
    </select>
  );
}

export default ZoneDropdown;