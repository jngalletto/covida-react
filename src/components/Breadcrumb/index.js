import React from "react";
import {
  Link
} from "react-router-dom";

import "./styles.scss";

const Breadcrumb = (props) => {

  const renderOptions = () => {
    const { options } = props;
    let classTest = "breadcrumb-item";
    return options.map((option, i) => {
      if (i === options.length - 1) {
        classTest += " active";
      }
      return <li className={ classTest }><Link to={option.link}>{ option.name }</Link></li>;
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