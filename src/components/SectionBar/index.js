import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import SectionContainer from '../SectionContainer';
import { fetchAll as fetchAllSections } from '../../api/section';

import "./styles.scss";

library.add(fas);

class SectionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionSelected: null,
      categories: [],
      sections: [],
    }
  }

  componentDidMount() {
    this.getAllSections();
  }

  getAllSections() {
    fetchAllSections()
      .then(response => (
        this.setState({
          sections: response.data
        })
      ))
  }

  render() {
    const { sections } = this.state;
    const { onChangeSection } = this.props;
    return(
      <>
      <div className="row filter-bar">
        <div className="col-sm-12 col-md-12">
          <h1 className="title-section">¿Qué tipo de ayuda estás buscando?</h1>
          <SectionContainer 
            onChange={ onChangeSection }
            sections={sections}
          />
        </div>
      </div>
      </>
    )
  }
}

export default SectionBar;
