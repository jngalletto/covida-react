import React, {Component} from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import ActionButtons from '../ActionButtons';
import Header from '../Header';
import ProjectsTable from "../ProjectsTable";
import ProjectDetail from '../ProjectDetail';
import CategoryBar from '../CategoryBar';
import SectionBar from '../SectionBar';
import Breadcrumb from '../Breadcrumb';
import ProjectForm from '../ProjectForm';


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumb:[{name: 'Inicio', link: '/'}],
      breadcrumbLevel: 0,
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

  breadcrumbGoTo = (location) => {
    const { history } = this.props;
    let categoryValue = this.state.category;
    let sectionValue = this.state.section;
    switch (this.state.breadcrumbLevel) {
      case 2:
        categoryValue = null;
        break;
      case 1: 
        categoryValue = null;
        sectionValue = null;
        break;
      default:
        break;
    }
    this.setState(prevState => {

      return ({
        ...prevState,
        breadcrumbLevel: prevState.breadcrumbLevel - 1,
        category: categoryValue,
        displayFeed: false,
        section: sectionValue,
        zone: null
      })
    })
    history.push(location);
  }

  onChangeZone = (zone) =>  {
    this.setState({
      zone
    })
  }

  onChangeCategory = (category) =>  {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    this.setBreadcrumbOption({
      name: category.name,
      link: `/feed?q=${query.q}`
    })
    this.setState({
      category,
      breadcrumbLevel: 2,
      displayFeed: true,
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
      breadcrumbLevel: 1,
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
                  goTo= { this.breadcrumbGoTo }
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
              <CategoryBar 
                section = { section }
                onChangeSection={ this.onChangeCategory }
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
