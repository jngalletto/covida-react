import React from 'react';
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ProjectsTable from "../ProjectsTable";

import "./styles.scss";

library.add(fas);

const Home = () => {
  return (
    <>
      <div id="home-main" className="text-center home-section">
        <div className="col-sm-12 logo-container">
          <p className="logo-font">nosayudamosentretodos.org</p>
        </div>
        <div className="col-sm-12">
          <p className="main-content">¿Cómo podemos ayudarnos?</p>
        </div>
        <div className="col-sm-12 action-container">
          <Link className="btn btn-light btn-main-action btn-home" to="/feed?q=necesito-ayuda">Necesito ayuda</Link>
          <Link className="btn btn-light btn-main-action btn-home" to="/feed?q=quiero-ayudar">Quiero ayudar</Link>
        </div>
        <div className="col-sm-12 sub-text-container">
          <p className="sub-text">Conectamos a quienes necesitan ayuda con las organizaciones y personas que están ayudando.</p>
        </div>

        {/* <div className="col-sm-12 action-recent-container">
          <p className="sub-text">VER INICIATIVAS RECIENTES</p>
          <FontAwesomeIcon icon="arrow-down" color="#A3C5CC" size="lg" />
        </div> */}
      </div>
      {/* <div className="home-section" style={{ paddingTop:20 }}>
        <div className="container">
          <ProjectsTable 
            section={null}
            zone={null}
          />
        </div>
      </div> */}
    </>
  )
}

export default Home;
