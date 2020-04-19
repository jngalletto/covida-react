import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import "./styles.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { renderForm } = this.props;
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/"><p id="header-logo" className="logo-font">nosayudamosentretodos.org</p></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse link-container" id="navbarSupportedContent">
          <div className="my-2 my-lg-0">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">Necesito ayuda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Quiero ayudar</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/sobre-nosotros">Sobre nosotros</Link>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={ () => renderForm() }>Contacto</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    );
  }
}

export default Header;