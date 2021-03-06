import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import CategoryContainer from '../CategoryContainer';
import { fetchBySection } from '../../api/category';

import "./styles.scss";

library.add(fas);

class CategoryBar extends Component {
  constructor(props) {
    const { requestHelp } = props;
    super(props);
    this.state = {
      sectionSelected: null,
      categories: [],
      requestHelp: requestHelp,
    }
  }

  componentDidMount() {
    this.getAllSections();
  }

  getAllSections() {
    const { section } = this.props;
    fetchBySection(section._id)
      .then(response => (
        this.setState({
          categories: response.data
        })
      ))
  }

  render() {
    const { categories, requestHelp } = this.state;
    const { actualCategory, onChangeSection } = this.props;
    return(
      <>
      <div className="row filter-bar">
        <div className="col-sm-12 col-md-12">
          <CategoryContainer 
            onChange={ onChangeSection }
            categories={ categories }
            actualCategory={ actualCategory }
            requestHelp={ requestHelp }
          />
        </div>
      </div>
      </>
    )
  }
}

export default CategoryBar;
