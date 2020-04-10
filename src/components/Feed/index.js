import React, {Component} from 'react';
import Header from '../Header';
import ProjectsTable from "../ProjectsTable";
import ProjectDetail from '../ProjectDetail';
import FilterBar from '../FilterBar';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProjectDetail: false,
      project: null,
      section: null,
      zone: null
    }
  }

  onChangeZone = (zone) =>  {
    this.setState({
      zone
    })
  }

  onChangeSection = (section) =>  {
    this.setState({
      section
    })
  }

  onClickCard = (project) => {
    this.setState({
      displayProjectDetail: true,
      project
    })
  }

  onCloseDetail = () => {
    this.setState({
      displayProjectDetail: false
    })
  }

  render () {
    const { displayProjectDetail, project, section, zone } = this.state;
    return (
      <>
        <div>
          <Header />
          <div className="container">
            <FilterBar 
              onChangeZone= { this.onChangeZone }
              onChangeSection={ this.onChangeSection }
            />
            <ProjectsTable 
              onClickCard= { this.onClickCard }
              section={ section }
              zone={ zone }
            />
          </div>
        </div>
        <ProjectDetail 
          display={ displayProjectDetail }
          onClose={ this.onCloseDetail }
          project={ project }
        />
      </>
    );
  }
}

export default Feed;
