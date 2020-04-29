import React from "react";
import "./styles.scss";

const CategoryContainer = (props) => {

  const renderCategory = () => {
    const { actualCategory, categories, onChange } = props;
    if (categories.length !== 0) {
      return categories.map(category => {
        let classNames = 'btn btn-outline-light category-container';
        if (actualCategory && actualCategory._id === category._id) {
          classNames += ' category-container-active';
        }
        return (
          <button 
            key={category._id} 
            type="button" 
            className={ classNames }
            onClick={ () => onChange(category) }
          >
            {category.name}
          </button>
        )
      })
    }
    return <h1>Aún no tenemos categorias</h1>
  }

  return (
    <>
      { renderCategory() }
    </>
  );
}

export default CategoryContainer;