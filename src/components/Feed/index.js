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
      breadcrumb:[{name: 'Inicio', link: '/', type: 'home'}],
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
    this.updateBreadcrumb();
  }

  getNameFromUrl(param) {
    const name = param.replace('-', ' ');
    return name;
  }

  updateBreadcrumb = () => {
    const { location } = this.props;
    const { category, section } = this.state;
    const query = queryString.parse(location.search);
    let breadcrumbOptions = [
      { name: 'Inicio', link: '/', type: 'home' },
      { name: this.getNameFromUrl(query.q), link: `/feed?q=${query.q}`, type: 'feed'}
    ]
    if (section) {
      breadcrumbOptions.push({ name: section.name, link: '/', type: 'section' })
    }
    if (category) {
      breadcrumbOptions.push({ name: category.name, link: '/', type: 'category' })
    }
    this.setState({
      breadcrumb: breadcrumbOptions
    })
  }

  breadcrumbGoTo = (option) => {
    const { history } = this.props;
    switch (option.type) {
      case 'feed':
        this.setState({
          category: null,
          displayFeed: false,
          project: null,
          section: null,
          zone: null
        }, () => this.updateBreadcrumb())
        break;
      case 'section':
        console.log("SECTION")
        this.setState({
          category: null,
          displayFeed: false,
          project: null,
        }, () => this.updateBreadcrumb())
        break
      case 'category':
        break
      default:
        history.push(option.link) 
        break;
    } 
  }

  onChangeZone = (zone) =>  {
    this.setState({
      zone
    })
  }

  onChangeCategory = (category) =>  {
    this.setState({
      category,
      displayFeed: true,
    }, () => this.updateBreadcrumb());
  }

  onChangeSection = (section) =>  {
    this.setState({
      section: section,
      displayFeed: false,
    }, () => this.updateBreadcrumb());
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

  render () {
    const { breadcrumb, category, displayProjectDetail, displayProjectForm, displayFeed, project, requestHelp, section, zone } = this.state;
    return (
      <>
        <div>
          <Header 
            renderForm={ this.renderForm }
          />
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <Breadcrumb 
                  goTo= { this.breadcrumbGoTo }
                  options = { breadcrumb }
                />
              </div>
              <div className="col-sm-4">
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
                actualCategory = { category }
                section = { section }
                onChangeSection={ this.onChangeCategory }
              />
            }
            
            { displayFeed && 
              <ProjectsTable 
                onClickCard= { this.onClickCard }
                requestHelp={requestHelp}
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
