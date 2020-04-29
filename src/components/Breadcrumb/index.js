import React from "react";
import "./styles.scss";

const Breadcrumb = (props) => {

  const renderOptions = () => {
    const { goTo, options } = props;
    let classNames = "breadcrumb-item";
    return options.map((option, i) => {
      if (i === options.length - 1) {
        classNames += " active";
      }
      return <li className={ classNames } onClick={ () => goTo(option) }> {option.name}</li>;
    });
  }

  return (
    <>
      <nav id="breadcumb-container-co" aria-label="breadcrumb ">
        <ol className="breadcrumb">
          { renderOptions() }
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;