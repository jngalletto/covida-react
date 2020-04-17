import React from "react";
import "./styles.scss";

const CategoryContainer = (props) => {

  const renderCategory = () => {
    const { categories } = props;
    if (categories) {
      return categories.map(category => (
        <button 
          key={category._id} 
          type="button" 
          className="btn btn-outline-light section-container" 
          onClick={ () => props.onChange(category) }
        >
          {category.name}
        </button>
      ))
    }
  }

  return (
    <>
      { renderCategory() }
    </>
  );
}

export default CategoryContainer;