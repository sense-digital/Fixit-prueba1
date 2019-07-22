//SECCIÓN DE RESERVA "3. Datos y agendamiento"

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/HomeSections.css';

class ReserveSection3 extends Component {  
  state = {};
 
  handleChange = (e) => {
    this.props.formularioDeContacto(e);
  }
  
  hoy = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd
  } 
  if(mm<10){
      mm='0'+mm
  } 
    return yyyy+"-"+mm+"-"+dd
  }


  dosMesesDespues = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+3; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd
  } 
  if(mm<10){
      mm='0'+mm
  } 
    return yyyy+"-"+mm+"-"+dd
  }

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
                <input type="date" name="fechaDeRecogida" onChange={this.handleChange} value={this.state.fechaDeRecogida} min={this.hoy()} max={this.dosMesesDespues()}/>
          </label>    

          <label>
                Hora:
                <select name="hora" onChange={this.handleChange} value={this.state.hora}>
                <option value="">Elige una opción</option> 
                  <optgroup label="AM"> 
<<<<<<< HEAD
                      <option value="8:00 A.M">8:00 A.M</option> 
                      <option value="9:00 A.M">9:00 A.M</option> 
                      <option value="10:00 A.M">10:00 A.M</option> 
                      <option value="11:00 A.M">11:00 A.M</option> 
                  </optgroup> 
                  <optgroup label="PM"> 
                      <option value="12:00 M">12:00 M</option> 
                      <option value="1:00 P.M">1:00 P.M</option> 
                      <option value="2:00 P.M">2:00 P.M</option> 
                      <option value="3:00 P.M">3:00 P.M</option> 
                      <option value="4:00 P.M">4:00 P.M</option> 
                      <option value="5:00 P.M">5:00 P.M</option> 
                      <option value="6:00 P.M">6:00 P.M</option> 
=======
                      <option value="8">8:00 A.M</option> 
                      <option value="9">9:00 A.M</option> 
                      <option value="10">10:00 A.M</option> 
                      <option value="11">11:00 A.M</option> 
                  </optgroup> 
                  <optgroup label="PM"> 
                      <option value="12">12:00 M</option> 
                      <option value="13">1:00 P.M</option> 
                      <option value="14">2:00 P.M</option> 
                      <option value="15">3:00 P.M</option> 
                      <option value="16">4:00 P.M</option> 
                      <option value="17">5:00 P.M</option> 
                      <option value="18">6:00 P.M</option> 
>>>>>>> 56ead4647a35d5d6b51b76ccf500f531b35740c8
                  </optgroup> 
                </select>
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