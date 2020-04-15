import React, {Component} from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import ActionButtons from '../ActionButtons';
import Header from '../Header';
import ProjectsTable from "../ProjectsTable";
import ProjectDetail from '../ProjectDetail';
import FilterBar from '../FilterBar';
import SectionBar from '../SectionBar';
import Breadcrumb from '../Breadcrumb';
import ProjectForm from '../ProjectForm';


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumb:[{name: 'Inicio', link: '/'}],
      category: null,
      displayProjectDetail: false,
      displayProjectForm: false,
      displayFeed: false,
      project: null,
      requestHelp: true,
      section: null,
      zone: null
    }
  }

  componentDidMount() {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    if (query.q && query.q === 'quiero-ayudar') {
      this.setState({
        requestHelp: false
      })
    }
  }

  onChangeZone = (zone) =>  {
    console.log("here");
    this.setState({
      zone
    })
  }

  onChangeCategory = (category) =>  {
    this.setState({
      category
    })
  }

  onChangeSection = (section) =>  {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    this.setBreadcrumbOption({
      name: section.name,
      link: `/feed?q=${query.q}`
    })
    this.setState({
      section: section._id
    })
  }

  onClickSearch = () => {
    this.setState({
      displayFeed: true
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

  onCloseForm = () => {
    this.setState({ displayProjectForm: false })
  }

  renderForm = () => {
    this.setState({ displayProjectForm: true })
  }

  setBreadcrumbOption = (option) => {
    this.setState(prevState => ({
      ...prevState,
      breadcrumb: [
        ...prevState.breadcrumb,
        option
      ]
    }))
  }

  render () {
    const { breadcrumb, category, displayProjectDetail, displayProjectForm, displayFeed, project, requestHelp, section, zone } = this.state;
    return (
      <>
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Breadcrumb 
                  options = { breadcrumb }
                />
              </div>
              <div className="col-sm-8">
                <ActionButtons 
                  requestHelp = { requestHelp }
                  renderForm = { this.renderForm }
                />
              </div>
            </div>
            { !section && 
              <SectionBar 
                onChangeSection={ this.onChangeSection }
             />
            }
            { section && 
              <FilterBar 
                section = { section }
                onChangeZone = { this.onChangeZone }
                onChangeCategory = { this.onChangeCategory }
                onClickSearch = { this.onClickSearch }
              />
            }
            
            { displayFeed && 
              <ProjectsTable 
                onClickCard= { this.onClickCard }
                category={ category }
                zone={ zone }
              />
            }
          </div>
        </div>
        <ProjectDetail 
          display={ displayProjectDetail }
          onClose={ this.onCloseDetail }
          project={ project }
        />
        <div className="container">
          <div className="row">
            <ProjectForm
              display={displayProjectForm}
              onClose={this.onCloseForm}
            />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Feed);
