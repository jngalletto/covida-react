import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

library.add(fas);

const SectionContainer = (props) => {
  const setDynamicColor = (color) => {
    return {
      borderColor: color,
      backgroundColor: color
    }
  }

  const renderSections = () => {
    const { sections } = props;
    if (sections) {
      return sections.map(section => (
        <button 
          key={section._id} 
          type="button" 
          className="btn btn-outline-light section-container" 
          style={ setDynamicColor(section.color) }
          onClick={ () => props.onChange(section._id) }
        >
          {section.name}
        </button>
      ))
    }
  }

  return (
    <>
      { renderSections() }
    </>
  );
}

export default SectionContainer;