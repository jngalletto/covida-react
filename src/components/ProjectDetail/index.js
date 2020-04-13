import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Fade from 'react-reveal/Fade';

import "./styles.scss";

library.add(fas, faFacebookF, faTwitter, faWhatsapp, faInstagram );

const ProjectDetail = (props) => {
  const { onClose, project, display } = props;

  const renderSocialIcons = () => (
    <>
        <span className="fa-layers fa-fw social-icon">
          <FontAwesomeIcon icon="circle" color="#1F5A66" size="lg" />
          <FontAwesomeIcon icon={['fab', 'facebook-f']} color="white" transform="shrink-3" />
        </span>
        <span className="fa-layers fa-fw social-icon">
          <FontAwesomeIcon icon="circle" color="#1F5A66" size="lg" />
          <FontAwesomeIcon icon={['fab', 'twitter']} color="white" transform="shrink-3" />
        </span>
        <span className="fa-layers fa-fw social-icon">
          <FontAwesomeIcon icon="circle" color="#1F5A66" size="lg" />
          <FontAwesomeIcon icon={['fab', 'whatsapp']} color="white" transform="shrink-3" />
        </span>
        <span className="fa-layers fa-fw social-icon">
          <FontAwesomeIcon icon="circle" color="#1F5A66" size="lg" />
          <FontAwesomeIcon icon={['fab', 'instagram']} color="white" transform="shrink-3" />
        </span>
      </>
  )

  const splitCoordinates = (coordinates) => {
    if (coordinates) {
      const splittedCoords = coordinates.split(",");
      return({
        lat: splittedCoords[0],
        lng: splittedCoords[1]
      })
    }
    return null;
  }

  const getMarkerGMap = (project) => {
    if (project) {
      const coordinates = splitCoordinates(project.coordinates);
      if (coordinates) {
        return <Marker name={project.name} position={coordinates} />
      }
    }
  }

  const getCenterGMap = (project) => {
    if (project) {
      const coordinates = splitCoordinates(project.coordinates);
      return coordinates ? coordinates : { lat: '-34.913446', lng: '-56.165029'}
    }
    return  { lat: '-34.913446', lng: '-56.165029'}
  }

  return (
    // <Fade bottom>
      <div className="modal modal-container" role="dialog" style={{ display: display ? 'block' : 'none'}}>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => onClose() } type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Name of project and social networks */}
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-8">
                    <h1>{ project && project.name }</h1>
                  </div>
                  <div className="col-sm-4 text-right" style={{ marginTop: 10 }}>
                    { renderSocialIcons() }
                  </div>
                </div>
              </div>
              {/* Schedule */}
              <div className="col-sm-12 schedule-container">
                <div className="row">
                  <div className="col-sm-4"><p> <FontAwesomeIcon icon="calendar" size="sm"/>  { project && project.daysService} </p></div>
                  <div className="col-sm-8"><p> <FontAwesomeIcon icon="clock" size="sm"/>  { project && project.schedule} </p></div>
                  <div className="col-sm-12"><p> <FontAwesomeIcon icon="map-marker-alt" size="sm"/>  { project && project.referenceAddress} </p></div>
                </div>
              </div>
              {/* Map and image */}
              <div className="row col-sm-12">
                <div className="col-sm-12 col-sm-6">
                  <Map
                    google={props.google}
                    zoom={13}
                    initialCenter={getCenterGMap(project)}
                  >
                    { getMarkerGMap(project) }
                  </Map>
                </div>
                <div className="col-sm-12 col-sm-5 offset-sm-1">
                  <img className="rounded img-fluid" src={project && project.image} alt={ project && project.name } />
                </div>
              </div>
              {/* Contact */}
              <div className="col-sm-12 contact-container">
                <div className="row">
                  <div className="col-sm-12">
                    <h3>Contacto</h3>
                  </div>
                  <div className="col-sm-12">
                    <p><FontAwesomeIcon icon="phone" size="sm" />  { project && project.phone }</p>
                    <p><FontAwesomeIcon icon="envelope" size="sm" />  { project && project.email }</p>
                    <p><FontAwesomeIcon icon="globe" size="sm" />  { project && project.website }</p>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="col-sm-12 description-container">
                <p>{ project && project.description }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </Fade>
  );
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GMAP_API_KEY)
})(ProjectDetail);
