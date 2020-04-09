import React, {Component} from 'react';
import Header from "../Header";
import ProjectsTable from "../ProjectsTable";
import FilterBar from "../FilterBar";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render () {
    const { section, zone } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <FilterBar 
            onChangeZone= { this.onChangeZone }
            onChangeSection={ this.onChangeSection }
          />
          <ProjectsTable 
            section={ section }
            zone={ zone }
          />
        </div>
      </div>
    );
  }
}

export default Feed;
