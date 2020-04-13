import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import DropdownZone from '../ZoneDropbdow';
import CategoryDropdown from '../CategoryDropdown';
import SectionContainer from '../SectionContainer';
import { fetchAll as fetchAllZones } from '../../api/zone';
import { fetchAll as fetchAllSections } from '../../api/section';
import { fetchAll as fetchAllCategories } from '../../api/category';

import "./styles.scss";

library.add(fas);

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      sections: [],
      zones: []
    }
  }

  componentDidMount() {
    this.getAllZones();
    this.getAllSections();
    this.getAllCategories();
  }

  getAllCategories() {
    fetchAllCategories()
      .then(response => (
        this.setState({
          categories: response.data
        })
      ))
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
    const { categories, sections, zones } = this.state;
    const { onChangeZone, onChangeSection } = this.props;
    return(
      <>
      <div className="row filter-bar">
        <div className="col-sm-12 col-md-12">
          <SectionContainer 
            onChange={ onChangeSection }
            sections={sections}
          />
        </div>
      </div>
      <div className="row">
      <div className="col-sm-12 col-md-5">
          <input className="form-control form-input" placeholder="Busca lo que necesites"/>
        </div>
        <div className="col-sm-12 col-md-3">
          <CategoryDropdown 
            onChange={ onChangeZone }
            categories={categories}
          />
        </div>
        <div className="col-sm-12 col-md-3">
          <DropdownZone 
            onChange={ onChangeZone }
            zones={zones}
          />
        </div>
        <div className="col-sm-12 col-md-1">
          <button className="btn btnSearch"><FontAwesomeIcon icon="search" color="white" size="2x"/></button>
        </div>
      </div>
      </>
    )
  }
}

export default FilterBar;
