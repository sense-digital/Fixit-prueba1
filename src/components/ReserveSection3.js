//SECCIÓN DE RESERVA "3. Datos y agendamiento"

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/HomeSections.css';

class ReserveSection3 extends Component {  
  state = {};
 
  handleChange = (e) => {
    this.props.formularioDeContacto(e);
  }
  
  // handleClick = (e) => {
  //   console.log(this.state);
  // }

  botonDeSiguiente = ()=> {
    if ((this.props.estado.nombre) && (this.props.estado.apellido) && (this.props.estado.direccion) && (this.props.estado.detalleDireccion) && (this.props.estado.fechaDeRecogida) && (this.props.estado.hora) && (this.props.estado.correo) && (this.props.estado.celular))
    return <button ><Link to="/home/4"> Siguiente </Link></button>
    else
    return <h4>Completa el formulario para continuar</h4>
  }
 
  render () {   
      return (
        <div>

        {/* INICIO de título  */}
         <div className='hero-container' style={{
           backgroundColor:'white',
         }}>
              <div className='herosectiont-1'>
                  <h2>3. Datos y agendamiento</h2>
              </div>
            </div>
        {/* FIN de título */}



         {/* INICIO formulario para compra */}
          <form>

            <label>
              Nombre:
              <input type="text" name="nombre" onChange={this.handleChange} value={this.state.nombre}/>
            </label>

            <label>
                Apellido:
                <input type="text" name="apellido" onChange={this.handleChange} value={this.state.apellido}/>
            </label>

          <br/>

          <label>
                Dirección:
                <input type="text" name="direccion" onChange={this.handleChange} value={this.state.direccion}/>
          </label>


          <label>
                Detalle dirección:
                <input type="text" name="detalleDireccion" onChange={this.handleChange} value={this.state.detalleDireccion}/>
          </label>

          <br/>

         <label>   
                Fecha de recogida:
                <input type="date" name="fechaDeRecogida" onChange={this.handleChange} value={this.state.fechaDeRecogida}/>
          </label>    

          <label>
                Hora:
                <input type="time" name="hora" onChange={this.handleChange} value={this.state.hora}/>
          </label>

          <br/>

          <label>
                Correo electrónico:
                <input type="email" name="correo" onChange={this.handleChange} value={this.state.correo}/>
          </label>

          <label>
                Celular:
                <input type="tel" name="celular" onChange={this.handleChange} value={this.state.celular}/>
          </label>
          </form>
        {/* FIN formulario para compra */}

        <div>
              <h2>Costo de reparación </h2>
              <h5>{ new Intl.NumberFormat("de-DE", {style: "currency", currency: "COP", minimumFractionDigits: 0}).format(this.props.precioEscogido)} </h5>
              {this.botonDeSiguiente()}
            </div>

        </div>
      );
    }
  }

export default ReserveSection3;