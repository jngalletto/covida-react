import React from "react";
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

library.add(fas);

const ActionButtons = (props) => {

  const renderActionButton = () => {
    const { renderForm, requestHelp } = props;
    if (requestHelp) {
      return (
        null
      )
    }
    return(
      <button className="btn actionButton requestButton" onClick={renderForm}><FontAwesomeIcon icon="plus" color="white" /> Sumar iniciativa de ayuda</button>
    )
  }

  return (
    <>
      { renderActionButton() }
    </>
  );
}

export default ActionButtons;