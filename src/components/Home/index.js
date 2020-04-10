import React from 'react';
import {
  Link
} from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="container text-center">
      <div className="col-xs-12 logo-container">
        <p className="logo-font">entretodos.org</p>
      </div>
      <div className="col-xs-12">
        <p className="main-content">Buscá entre cientos de iniciativas para ayudarnos entre todos.</p>
      </div>
      <div className="col-xs-12 action-container">
        <Link className="btn btn-light btn-action" to="/feed">Necesito ayuda</Link>
        <Link className="btn btn-light btn-action" to="/feed">Quiero ayudar</Link>
      </div>
      <div className="col-xs-12">
        <p className="sub-text">Conectamos a personas y organizaciones para la ayuda mutua en el contexto de la emergencia sanitaria.</p>
      </div>

    </div>
  )
}

export default Home;
