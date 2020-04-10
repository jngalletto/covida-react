import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Fade from 'react-reveal/Fade';

import "./styles.css";

library.add(fas, faFacebookF, faTwitter, faWhatsapp, faInstagram, faLinkedin );

const ProjectCard = (props) => {
  const { project } = props;

  const renderSocialIcons = () => (
    <div className="share-container">
        <span className="fa-layers fa-fw social-icon">
          <FontAwesomeIcon icon="circle" color="white" size="lg" />
          <FontAwesomeIcon icon={['fab', 'facebook-f']} transform="shrink-3" />
        </span>
        <span className="fa-layers fa-fw social-icon">
          <FontAwesomeIcon icon="circle" color="white" size="lg" />
          <FontAwesomeIcon icon={['fab', 'twitter']} transform="shrink-3" />
        </span>
        <span className="fa-layers fa-fw social-icon">
          <FontAwesomeIcon icon="circle" color="white" size="lg" />
          <FontAwesomeIcon icon={['fab', 'whatsapp']} transform="shrink-3" />
        </span>
        <span className="fa-layers fa-fw social-icon">
          <FontAwesomeIcon icon="circle" color="white" size="lg" />
          <FontAwesomeIcon icon={['fab', 'instagram']} transform="shrink-3" />
        </span>
        <span className="fa-layers fa-fw social-icon">
          <FontAwesomeIcon icon="circle" color="white" size="lg" />
          <FontAwesomeIcon icon={['fab', 'linkedin']} transform="shrink-3" />
        </span>
      </div>
  )

  return (
    <Fade bottom>
      <div className="card card-container-co" onClick={() => {console.log("Render card: ", project._id)}}>
        { renderSocialIcons() }
        <img src={project.image} className="card-img-top card-image-co" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{ project.name }</h4>
          <hr />
          <p className="card-text"> <FontAwesomeIcon icon="calendar" /> { project.daysService} </p>
          <p className="card-text"> <FontAwesomeIcon icon="clock" /> { project.schedule} </p>
        </div>
      </div>
    </Fade>
  );
}

export default ProjectCard;
