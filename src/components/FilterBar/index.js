import React, { Component } from "react";
import DropdownZone from '../ZoneDropbdow';
import SectionContainer from '../SectionContainer';

import { fetchAll as fetchAllZones } from '../../api/zone';
import { fetchAll as fetchAllSections } from '../../api/section';

import "./styles.css";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      zones: []
    }
  }

  componentDidMount() {
    this.getAllZones();
    this.getAllSections();
  }

  getAllZones() {
    fetchAllZones()
      .then(response => (
        this.setState({
          zones: response.data
        })
      ))
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
    const { sections, zones } = this.state;
    const { onChangeZone, onChangeSection } = this.props;
    return(
      <div className="row filter-bar">
        <div className="col-xs-12 col-md-2">
          <DropdownZone 
            onChange={ onChangeZone }
            zones={zones}
          />
        </div>
        <div className="col-xs-12 col-md-8">
          <SectionContainer 
            onChange={ onChangeSection }
            sections={sections}
          />
        </div>
      </div>
    )
  }
}

export default FilterBar;
