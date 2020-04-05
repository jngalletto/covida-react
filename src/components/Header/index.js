import React, { Component } from "react";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand headerTitle" href="#">EMPATÍA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" aria-disabled="true">LINK 1</a>
            </li>
          </ul>
          <button className="btn btn-outline-success my-2 my-sm-0 helpButton" type="submit">Search</button>
        </div>
      </nav>
    );
  }
}

export default Header;