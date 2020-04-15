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
    if(!equal(this.props.zone, prevProps.zone)) {
      this.getAllProjects();
    } 
  }

  getAllProjects() {
    const { category, zone } = this.props;
    fetchFiltered(zone, category)
      .then(response => {
        this.setState({
          projects: response.data
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