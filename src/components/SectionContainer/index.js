import React from "react";
import "./styles.scss";

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
          onClick={ () => props.onChange(section) }
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