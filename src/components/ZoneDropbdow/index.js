import React from "react";
import "./styles.css";

const DropdownZone = (props) => {
  const renderZones = () => {
    const { zones } = props;
    if (zones) {
      return zones.map(zone => (
        <option key={zone._id} value={zone._id}>{zone.name}</option>
      ))
    }
  }

  return (
    <select className="form-control">
      <option>Ubicación</option>
      { renderZones() }
    </select>
  );
}

export default DropdownZone;