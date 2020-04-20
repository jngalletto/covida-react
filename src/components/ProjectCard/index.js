import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';

import "./styles.scss";

library.add(fas );

const ProjectCard = (props) => {
  const { onClick, project } = props;

  const sliceDescription = (description) => (
    description.substring(0, 80)
  )

  return (
    <Fade bottom>
      <div className="card card-container-co" onClick={() => { onClick(project) }}>
        <img src={project.image} className="card-img-top card-image-co img-fluid" alt={`${project.name} imagen`} />
        <div className="card-body">
          <h4 className="card-title">{ project.name }</h4>
          <p className="card-description">{ sliceDescription(project.description) }</p>
          <div className="card-data-container">
            <p> <FontAwesomeIcon icon="calendar" size="xs"/>  { project.daysService} </p>
            <p> <FontAwesomeIcon icon="clock" size="xs"/>  { project.schedule} </p>
            <p> <FontAwesomeIcon icon="map-marker-alt" size="xs"/>  { project.schedule} </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ProjectCard;
