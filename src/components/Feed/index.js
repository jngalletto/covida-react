import React, { Component } from "react";
import ProjectCard from '../ProjectCard';
import { fetchAll } from '../../api/project';

import "./styles.css";

class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    this.getAllProjects();
  }

  getAllProjects() {
    fetchAll()
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }

  renderProjects(){
    const { projects } = this.state;
    if(projects){
      return projects.map(project => <ProjectCard project={project}/>)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          { this.renderProjects() }
        </div>
      </div>
    );
  }
}

export default Feed;