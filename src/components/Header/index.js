import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ProjectForm from '../ProjectForm';

import "./styles.css";

library.add(fas);


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProjectForm: false
    }
  }

  renderForm = () => {
    this.setState({ displayProjectForm: true })
  }

  onCloseForm = () => {
    this.setState({ displayProjectForm: false })
  }

  render() {
    const { displayProjectForm } = this.state;
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/feed"><p className="logo-font">entretodos.org</p></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse link-container" id="navbarSupportedContent">
          <div className="my-2 my-lg-0">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">¿Cómo funciona?</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Necesito ayuda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Quiero ayudar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Sobre nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Necesito ayuda</li>
              </ol>
            </nav>
          </div>
          <div className="col-sm-12 col-md-4">
            <a className="btn btn-main-action" onClick={this.renderForm}><FontAwesomeIcon icon="plus" color="white" /> Sumar iniciativa de ayuda</a>
          </div>
          <ProjectForm
            display={displayProjectForm}
            onClose={this.onCloseForm}
          />
        </div>
      </div>
    </>
    );
  }
}

export default Header;