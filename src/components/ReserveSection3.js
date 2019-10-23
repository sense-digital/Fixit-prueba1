//SECCIÓN DE RESERVA "3. Datos y agendamiento"

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/reservesection3.css';
import '../pages/styles/HomeSections.css';
import firebase from 'firebase/app';
import 'firebase/auth';


class ReserveSection3 extends Component {  
  state = {};
 
  componentDidMount(){
    this.authListener();
}

authListener() {
firebase.auth().onAuthStateChanged((user) => {       
    if (user) {
      // User is signed in.
    this.setState({user});        
    
    } else {
      // User is signed out.
      this.setState({user:null});
    }
  });}


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

  contraseña = ()=> {
    if (this.state.user===null)
    return (
      <div className='item-rs3form'>
      <div className='item-rs3form'>
      <label>
            Contraseña para tu nueva cuenta en Fixit:
        </label>
      </div>
      <div className='item-rs3form'>
        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
      </div>
      </div>) 
}

  botonDeSiguiente = ()=> {
    if ((this.props.estado.nombre) && (this.props.estado.apellido) && (this.props.estado.direccion) && (this.props.estado.detalleDireccion) && (this.props.estado.fechaDeRecogida) && (this.props.estado.hora) && (this.props.estado.mail) && (this.props.estado.celular))
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
              <Link to='/home/2' className='previous'>&#8249;</Link>{/*&#8701*/}
              <div className='herosection-1'>
                  <h2>3. Datos y agendamiento</h2>
              </div>
            </div>
        {/* FIN de título */}



         {/* INICIO formulario para compra */}
    
          
          <form className='form-datosyagendamiento'>

            <div className='item-rs3form'><label>
              Nombre:
            </label>
            </div>
            <div className='item-rs3form'>
               <input type="text" name="nombre" onChange={this.handleChange} value={this.state.nombre}/>
            </div>

            <div className='item-rs3form'>
            <label>
                Apellido:
            </label>
            </div>
            <div className='item-rs3form'>
              <input type="text" name="apellido" onChange={this.handleChange} value={this.state.apellido}/>
            </div>

          <div className='item-rs3form'>
            <label>
                Dirección:
            </label>
          </div>
          <div className='item-rs3form'>
            <input type="text" name="direccion" onChange={this.handleChange} value={this.state.direccion}/>
          </div>

          <div className='item-rs3form'>
            <label>
                Detalle dirección:
            </label>
          </div>
          <div className='item-rs3form'>
             <input type="text" name="detalleDireccion" onChange={this.handleChange} value={this.state.detalleDireccion}/>
          </div>

          

          <div className='item-rs3form'>
           <label>   
                Fecha de recogida:
           </label> 
          </div>   
          <div className='item-rs3form'>
           <input type="date" name="fechaDeRecogida" onChange={this.handleChange} value={this.state.fechaDeRecogida} min={this.hoy()} max={this.dosMesesDespues()}/>
          </div> 
          <div className='item-rs3form'>
           <label>
                Hora:
           </label>
          </div>
          <div className='item-rs3form'><select name="hora" onChange={this.handleChange} value={this.state.hora} id="horaReserva">
                <option value="">Elige una opción</option> 
                  <optgroup label="AM">
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
                  </optgroup> 
                </select>
          </div>
          <div className='item-rs3form'>
            <label>
                Correo electrónico:
            </label>
          </div>
          <div className='item-rs3form'>
            <input type="email" name="mail" onChange={this.handleChange} value={this.state.mail}/>
          </div>
          <div className='item-rs3form'>
            <label>
                Celular:
            </label>
          </div>
          <div className='item-rs3form'>
           <input type="text" name="celular" onChange={this.handleChange} value={this.state.celular}/>
          </div>
          {this.contraseña()} 
          </form>
        {/* FIN formulario para compra */}

        <div className='reservesection2-info-container'> 
            <div className='reservesection2-tittle-container'>
            <div className='reservesection2-title'>
              <h2>Costo de reparación </h2>
              <h5>{ new Intl.NumberFormat("de-DE", {style: "currency", currency: "COP", minimumFractionDigits: 0}).format(this.props.precioEscogido)} </h5>
            </div>
              {this.botonDeSiguiente()}
          </div>
        </div>
      </div>

         
      );
    }
  }

export default ReserveSection3;