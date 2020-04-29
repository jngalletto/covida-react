import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import ProjectForm from '../ProjectForm';

import "./styles.scss";


class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumb:[{ name: 'Inicio', link: '/', type: 'home' }, { name: 'Sobre nosotros', link: '/', type: 'page' }],
      breadcrumbLevel: 0,
      displayProjectForm: false,
    }
  }

  breadcrumbGoTo = (option) => {
    const { history } = this.props;
    history.push(option.link);
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
    const { breadcrumb, displayProjectForm } = this.state;
    return (
      <>
        <div>
          <Header 
            renderForm={ this.renderForm }
          />
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Breadcrumb 
                  goTo= { this.breadcrumbGoTo }
                  options = { breadcrumb }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: '2rem'}}>
          <div className="row">
            <div className="col-sm-4">
              <h1 className="page-title">
                La empatía puede cambiar el mundo. Conectamos personas e iniciativas para la ayuda mutua.
              </h1>
            </div>
            <div className="col-sm-8">
              <p className="page-content">
                <strong>Nuestros principios y valores</strong><br/><br/> 
                Somos una organización sin fines de lucro que busca ayudar a la mayor cantidad de personas posible, priorizando a quienes más necesitan ayuda.<br/><br/> 
                Perseguimos el máxima nivel de objetividad, veracidad y confiabilidad. <br/><br/> 
                No aceptamos ningún tipo de discriminación por motivos raza, género, origen, religión, política o cualquier convicción o creencia.<br/><br/> 
                <strong>Breve Historia</strong> <br/><br/> 
                Con la crisis que ha generado la pandemia de COVID-19 vimos que es mucha la ayuda que se necesita, pero que también son muchas las personas que pueden y quieren ayudar.<br/><br/> 
                Esta plataforma está pensada como una herramienta para ayudar a conectar a las personas que necesitan ayuda con las organizaciones, personas y la información disponible para ayudarlas.
              </p>
            </div>
          </div>
            <ProjectForm
              display={displayProjectForm}
              onClose={this.onCloseForm}
            />
        </div>
      </>
    );
  }
}

export default withRouter(AboutUs);
