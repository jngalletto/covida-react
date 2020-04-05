import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="headerTitle">
          EMPATIA
        </div>
        <Button className="helpButton">
          Ayudar
        </Button>
      </div>
    );
  }
}

export default Header;