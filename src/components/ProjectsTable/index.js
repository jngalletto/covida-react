import React, { Component } from "react";
import equal from 'fast-deep-equal'
import ProjectCard from '../ProjectCard';
import { fetchFiltered } from '../../api/project';

import "./styles.scss";

class ProjectsTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    this.getAllProjects();
  }

  componentDidUpdate(prevProps) {
    if(!equal(this.props.category, prevProps.category)) {
      this.getAllProjects();
    } 
  }

  getAllProjects() {
    const { category, requestHelp, zone } = this.props;
    const categoryToFilter = category && category._id;
    const zoneToFilter = zone && zone._id;
    fetchFiltered(zoneToFilter, categoryToFilter)
      .then(response => {
        const projects = response.data.filter(project => (project.isVerified && (project.wantsHelp === requestHelp || project.needsHelp === !requestHelp) ));
        this.setState({
          projects
        })
      })
  }

  renderProjects(){
    const { projects } = this.state;
    const { onClickCard } = this.props;
    if(projects){
      return projects.map(project => <ProjectCard 
        key={project._id} 
        onClick={ onClickCard } 
        project={project}
      />)
    }
  }

  render() {
    return (
      <div className="row">
        { this.renderProjects() }
      </div>
    );
  }
}

export default ProjectsTable;