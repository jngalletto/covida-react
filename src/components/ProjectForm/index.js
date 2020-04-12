import React, { Component } from "react";
import "./styles.scss";

class ProjectForm extends Component {
  onSend = () => {
  }

  render () {
    const { onClose, display } = this.props;
    return (
      <div id="modal-form-container" className="modal modal-container" tabindex="-1" role="dialog" style={{ display: display ? 'block' : 'none'}}>
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
                <input className="form-input" type="text" id="fname" placeholder="Ej. Iniciativa uruguay" name="fname"/>
              </div>

              <div className="section">
                <h5>Descripción o información adicional</h5>
                <input className="large-txt form-input " type="text" id="fname" placeholder="Lorem ipsum" name="fname"/>
              </div>

              <div className="section">
                <h5>Formas de colaborar con la iniciativa</h5>
                <input className="large-txt form-input" type="text" id="fname" placeholder="Lorem ipsum" name="fname"/>
              </div>

              <div className="section">
                <h5>Imagen o afiche para difusión</h5>
              </div>

              <div className="section">
                <h5>WEB (Si aplica o Grupo de Facebook, Instagram, etc)</h5>
                <input className="form-input" type="text" id="fname" placeholder="Ej. www.tuweb.com.uy" name="fname"/>
              </div>

              <div className="section">
              <h5>Información de contacto</h5>
                <h6>Ubicación</h6>
                <input className="form-input" type="text" id="fname" placeholder="Dr. Fulano de Tal 1234" name="fname"/>
              </div>

              <div className="row">
                <div className="section">
                  <h6>Teléfono</h6>
                  <input className="form-input" type="text" id="fname" placeholder="(2) 123 45 67" name="fname"/>
                </div>

                <div className="section">
                  <h6>e-mail</h6>
                  <input className="form-input" type="text" id="fname" placeholder="tuemail@gmail.com" name="fname"/>
                </div>
              </div>

              <div className="section">
                <h6>Participo en esta iniciativa</h6>
                <div>
                </div>
                <select className="form-control">
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="section">
                <h6>Nombre del responsable</h6>
                <input className="form-input" type="text" id="fname" placeholder="Tu nombre" name="fname"/>
              </div>

              <p className="section">
                Si participás en la iniciativa propuesta, uno de nuestros voluntarios se comunicará contigo
                a la brevedad para chequear y ampliar la información que nos brindaste, de modo que la publicación
                sea lo más completa posible.
              </p>

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
