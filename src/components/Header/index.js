import React, { Component } from "react";
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ProjectForm from '../ProjectForm';

import "./styles.scss";

library.add(fas);


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProjectForm: false,
      requestHelp: true
    }
  }

  componentDidMount() {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    if (query.q && query.q === 'quiero-ayudar') {
      this.setState({
        requestHelp: false
      })
    }
  }

  renderForm = () => {
    this.setState({ displayProjectForm: true })
  }

  onCloseForm = () => {
    this.setState({ displayProjectForm: false })
  }

  renderActionButton () {
    const { requestHelp } = this.state;
    if (requestHelp) {
      return (
        <button className="btn actionButton emergencyButton"><FontAwesomeIcon icon="exclamation" color="white" /> Emergencias</button>
      )
    }
    return(
      <button className="btn actionButton requestButton" onClick={this.renderForm}><FontAwesomeIcon icon="plus" color="white" /> Sumar iniciativa de ayuda</button>
    )
  }

  render() {
    const { displayProjectForm } = this.state;
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
            <nav id="breadcumb-container-co" aria-label="breadcrumb ">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Necesito ayuda</li>
              </ol>
            </nav>
          </div>
          <div className="col-sm-12 col-md-4">
            { this.renderActionButton() }
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

export default withRouter(Header);