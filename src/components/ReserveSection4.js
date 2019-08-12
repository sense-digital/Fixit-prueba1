//SECCIÓN DE RESERVA "4. Confirmación y pago"

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/HomeSections.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import '../components/styles/reservesection4.css';


class ReserveSection4 extends Component {  
  constructor () {
    super()
    this.state = {
      pago:'',
      noUser:'',
      user:''
    }
    this.db = firebase.firestore()  
  }
  
componentDidMount(){
 this.authListener();
 firebase.firestore().collection('usuarios').where("mail", '==',this.props.estado.mail).get().then((snapShots)=>{
    this.setState({
      noUser: snapShots.empty
    })
  })
}

authListener() {
  firebase.auth().onAuthStateChanged((user) => {       
      if (user) {
        // User is signed in.
      this.setState({user:true});        
      } else {
        // User is signed out.
        this.setState({user:false});
      }
    });}


  handleChange(e) {
    return this.props.modoPago(e);
  }

  login () {
    firebase.auth().signInWithEmailAndPassword(this.props.estado.mail, this.props.estado.password)
    .then(result => {
      console.log('loggeado')
      // result.user.updateProfile()
    })
    .catch(function(error) {
        alert(`Se ha presentado el siguiente error: ${error}`)
      });
  }

  createUserDataBase(result) {
    return this.db.collection('usuarios').add({
      nombre : this.props.estado.nombre,
      apellido : this.props.estado.apellido,
      correo : this.props.estado.mail,
      direccion: this.props.estado.direccion,
      detalleDireccion : this.props.estado.detalleDireccion,
      tipoUsuario:'cliente',
      id:result.user.uid,
      fechaDeSolicitud: firebase.firestore.FieldValue.serverTimestamp()
    })
}

  register () {
    firebase.auth().createUserWithEmailAndPassword(this.props.estado.mail, this.props.estado.password)
    .then( result => 
      {this.createUserDataBase(result) 
    })
    .catch(function(error) {
    alert(`Se ha presentado el siguiente error: ${error}`)
    });
  }

  disparadorReserva(){
    if ( this.state.user )
      this.guardarServicioEnBaseDeDatos();
    // return this.guardarServicioEnBaseDeDatos()
    else if ( this.state.noUser ) {
      this.register();
      this.guardarServicioEnBaseDeDatos();
      // this.guardarServicioEnBaseDeDatos()
    }
    else if ( !this.state.noUser ) {
      this.login();
      this.guardarServicioEnBaseDeDatos();
      // this.guardarServicioEnBaseDeDatos()
    }
  }

  guardarServicioEnBaseDeDatos() {
    return this.db.collection('reservas').add({
      celular: this.props.estado.celular,
      servicio: this.props.estado.servicio,
      precio:this.props.estado.precio,
      nombre:this.props.estado.nombre,
      apellido:this.props.estado.apellido,
      direccion: this.props.estado.direccion,
      detalleDireccion: this.props.estado.detalleDireccion,
      fechaDeRecogida:this.props.estado.fechaDeRecogida,
      hora: this.props.estado.hora,
      mail: this.props.estado.mail,
      equipo: this.props.estado.equipo,
      pago:this.state.pago,
      fechaDeSolicitud: firebase.firestore.FieldValue.serverTimestamp(),
      estado: 'procesando'
     })
   }

  botonDeSiguiente = ()=>{
    if(this.state.pago)
    return  <button onClick={()=>this.disparadorReserva()}><Link to='/thankyou'> Confirmar </Link></button>
    else
    return <h5>Elige un medio de pago para continuar</h5>
  }


  render () {   
      return (
        <div>

        {/* inicio de título "selecciona tu dispositivo" */}
         <div className='hero-container' style={{
           backgroundColor:'white',
         }}>
              <Link to='/home/3' className='previous'>&#8249;</Link>{/*&#8701*/}              
              <div className='herosection-1'>
                  <h2>4. Confirmación y pago</h2>
              </div>
            </div>
        {/* fin de título "selecciona tu dispotivo" */}

      <section className='form-container-inforeserva'>
        <div className='info-servicio-cliente'>
          <h2>Dirección y contacto:</h2>
          <p>{this.props.estado.nombre} {this.props.estado.apellido}</p>
          <p>{this.props.estado.direccion}</p>
          <p>{this.props.estado.detalleDireccion}</p>
          <p>{this.props.estado.celular}</p>
          <p>{this.props.estado.mail}</p>
        </div>

        <div className='info-servicio-cliente'>
         <h2>Servicio:</h2>
         <p>{this.props.estado.servicio}</p>
        </div>

        <div className='info-servicio-cliente'>
          <h2>Equipo:</h2>
          <p>{this.props.estado.equipo}</p>
        </div>

        <div className='info-servicio-cliente'>
          <h2>Fecha y hora:</h2>
          <p>{this.props.estado.fechaDeRecogida}</p>
          <p>{this.props.estado.hora}</p>
        </div>

        <div className='info-servicio-cliente'>
          <h2>Valor a pagar:</h2>
          <h5>{ new Intl.NumberFormat("de-DE", {style: "currency", currency: "COP", minimumFractionDigits: 0}).format(this.props.estado.precio)} </h5>
        </div> 

        <div className='info-servicio-cliente'>
          <h2>¿Cómo vas a pagar?</h2>
          <form className='form-mediodepago'>
          <label><input type="radio" name="pago" value="payu" onChange={()=>this.setState({pago:'payu'})} /> PayU </label>
          <label><input type="radio" name="pago" value="contraEntrega" onChange={()=>this.setState({pago:'contraEntrega'})} /> Contra Entrega </label>
          </form>
        </div> 

        <div className='info-servicio-cliente'> 
          {this.botonDeSiguiente()}
        </div> 
      
      </section>  

        </div>
      );
    }
  }

export default ReserveSection4;