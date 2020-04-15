import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import DropdownZone from '../ZoneDropbdow';
import CategoryDropdown from '../CategoryDropdown';
import { fetchAll as fetchAllZones } from '../../api/zone';
import { fetchBySection } from '../../api/category';

import "./styles.scss";

library.add(fas);

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionSelected: null,
      categories: [],
      zones: []
    }
  }

  componentDidMount() {
    this.getAllCategories();
    this.getAllZones();
  }

  getAllCategories() {
    const { section } = this.props
    fetchBySection(section)
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

  render() {
    const { categories, zones } = this.state;
    const { onClickSearch, onChangeCategory, onChangeZone } = this.props;
    return(
      <>
      <div className="row">
        {/* <div className="col-sm-12 col-md-5">
          <input className="form-control form-input" placeholder="Busca lo que necesites"/>
        </div> */}
        <div className="col-sm-12 col-md-5">
          <CategoryDropdown 
            onChange={ onChangeCategory }
            categories={ categories }
          />
        </div>
        <div className="col-sm-12 col-md-5">
          <DropdownZone 
            onChange={ onChangeZone }
            zones={ zones }
          />
        </div>
        <div className="col-sm-12 col-md-2">
          <button 
            className="btn btnSearch" 
            onClick={ onClickSearch }
          >
            <FontAwesomeIcon icon="search" color="white" size="2x"/>
          </button>
        </div>
      </div>
      </>
    )
  }
}

export default FilterBar;
