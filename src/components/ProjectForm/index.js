import React, { Component } from "react";
import { createProject } from '../../api/project';

import "./styles.scss";

class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      message: '',
      name: '',
      nameResponsable: '',
      address: '',
      email: '',
      belongsProject: null,
      description: '',
      phone: '',
      waysHelp: '',
      website: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  resetFields = () => {
    this.setState({
      error: '',
      message: '',
      name: '',
      nameResponsable: '',
      address: '',
      email: '',
      belongsProject: null,
      description: '',
      phone: '',
      waysHelp: '',
      website: ''
    })
  }

  validateForm = (body) => {
    if(body.name !== '' && body.nameResponsable !== '' && body.address !== '' &&  body.email !== '' && 
      body.description !== '' && body.phone !== '' && body.waysHelp !== '' && body.website !== '') {
      return true;
    }
    return false;
  }

  onSend = () => {
    const body = {
      name: this.state.name,
      nameResponsable: this.state.nameResponsable,
      address: this.state.address,
      email: this.state.email,
      belongsProject: this.state.belongsProject,
      description: this.state.description,
      phone: this.state.phone,
      waysHelp: this.state.waysHelp,
      website: this.state.website
    }
    if (this.validateForm(body)) {
      createProject(body);
      this.resetFields();
      this.setState({
        message: 'Iniciativa registrada con éxito, pronto nos comunicaremos con vos para completar el registro.'
      })
    } else {
      this.setState({
        error: 'Completa el formulario'
      })
    }
  }

  render () {
    const { error, message} = this.state;
    const { onClose, display } = this.props;
    return (
      <div id="modal-form-container" className="modal modal-container" role="dialog" style={{ display: display ? 'block' : 'none'}}>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => onClose()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h1>Sumá una iniciativa de ayuda</h1>
              <p className="section">
                Creemos que la empatía puede salvar al mundo, y que entre todos podemos ayudarnos
                a pasar por este momento difícil. Por eso queremos nuclear en un solo lugar todas las
                iniciativas solidarias que surgieron en respuesta a la crisis sanitaria por COVID-19.
              </p>
              <p className="section">
                Contanos tu iniciativa o ingresá la información de alguna que conozcas y no figuren
                en nuestra página. Queremos que todos estén acá: organizaciones sin fines de lucro,
                agrupaciones de vecinos, entidades estatales, empresas y comercios o también personas
                particulares que ofrezcan su ayuda.
              </p>
              <div className="section">
                <h5>Nombre o título de la iniciativa</h5>
                <input 
                  className="form-input" 
                  type="text" placeholder="Ej. Iniciativa uruguay" 
                  name="name" 
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>

              <div className="section">
                <h5>Descripción o información adicional</h5>
                <input 
                  className="large-txt form-input" 
                  type="text" 
                  placeholder="Lorem ipsum" 
                  name="description"
                  onChange={this.onChange}
                  value={this.state.description}
                />
              </div>

              <div className="section">
                <h5>Formas de colaborar con la iniciativa</h5>
                <input 
                  className="large-txt form-input" 
                  type="text" 
                  placeholder="Lorem ipsum" 
                  name="waysHelp"
                  onChange={this.onChange}
                  value={this.state.waysHelp}
                />
              </div>

              <div className="section">
                <h5>WEB (Si aplica o Grupo de Facebook, Instagram, etc)</h5>
                <input 
                  className="form-input" 
                  type="text" 
                  placeholder="Ej. www.tuweb.com.uy" 
                  name="website"
                  onChange={this.onChange}
                  value={this.state.website}
                />
              </div>

              <div className="section">
              <h5>Información de contacto</h5>
                <h6>Ubicación</h6>
                <input 
                  className="form-input" 
                  type="text" 
                  placeholder="Dr. Fulano de Tal 1234" 
                  name="address"
                  onChange={this.onChange}
                  value={this.state.address}
                />
              </div>

              <div className="row section">
                <div className="col-xs-6">
                  <h6>Teléfono</h6>
                  <input 
                    className="form-input" 
                    type="text" 
                    placeholder="(2) 123 45 67" 
                    name="phone"
                    onChange={this.onChange}
                    value={this.state.phone}
                  />
                </div>

                <div className="col-xs-6">
                  <h6>e-mail</h6>
                  <input 
                    className="form-input" 
                    type="text" 
                    placeholder="tuemail@gmail.com" 
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </div>
              </div>

              <div className="section">
                <h6>Participo en esta iniciativa</h6>
                <div>
                </div>
                <select 
                  className="form-control" 
                  name="belongsProject" 
                  onChange={this.onChange} 
                  value={this.state.belongsProject}
                >
                  <option value="true">Si</option>
                  <option value="false">No</option>
                </select>
              </div>

              <div className="section">
                <h6>Nombre del responsable</h6>
                <input 
                  className="form-input" 
                  type="text" 
                  placeholder="Tu nombre" 
                  name="nameResponsable"
                  onChange={this.onChange}
                  value={this.state.nameResponsable}
                />
              </div>

              <p className="section">
                Si participás en la iniciativa propuesta, uno de nuestros voluntarios se comunicará contigo
                a la brevedad para chequear y ampliar la información que nos brindaste, de modo que la publicación
                sea lo más completa posible.
              </p>

              { message && 
                <div class="alert alert-success" role="alert">
                { message }
                </div>
              }

              { error && 
                <div class="alert alert-danger" role="alert">
                { error }
                </div>
              }

              <div className="section buttons-container">
                <button className="form-btn mr20 secondary-btn" onClick={() => onClose()}>Cancelar</button>
                <button className="form-btn main-btn btn-main-action" onClick={this.onSend}>Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }
}

export default ProjectForm;
