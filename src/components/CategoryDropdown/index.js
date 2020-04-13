import React from "react";
import "./styles.scss";

const CategoryDropdown = (props) => {
  const renderCategories = () => {
    const { categories } = props;
    if (categories) {
      return categories.map(category => (
        <option key={category._id} value={category._id}>{category.name}</option>
      ))
    }
  }

  return (
    <select className="form-control form-input" onChange={ (e) => props.onChange(e.target.value) }>
      <option value='null'>Categorias</option>
      { renderCategories() }
    </select>
  );
}

export default CategoryDropdown;