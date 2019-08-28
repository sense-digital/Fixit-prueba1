//SECCIÓN DE DETALLE CLIENTE DEL PANEL DE ADMINISTRACIÓN CLIENTE

import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

class DetalleCuentaCliente extends Component {
    constructor () {
        super() 
        this.state = {
          data:[],
          user:{},
        }
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
            this.llamadoFirebase();
          })
        }

      llamadoFirebase () {
        firebase.firestore().collection('usuarios').where("correo", '==',this.state.user.email).get().then((snapShots)=>{
          this.setState({
            data: snapShots.docs.map(doc => {
              return  (doc.data());
            })
          })
        })
    }

    componentWillMount () {
      this.authListener();      
    }

    render () {
        return (
        <div>
            {this.state.data.map(data=>{return(<p key={data.id}>{data.nombre}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.apellido}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.direccion}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.detalleDireccion}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.correo}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.celular}</p>)})}

            <h3>Cambio de contraseña:</h3>
            <form>
              <label>Contraseña actual
                <input type='text'></input>
              </label>
              <label>Contraseña nueva
                <input type='text'></input>
              </label>
              <label>Confirmar contraseña nueva
                <input type='text'></input>
              </label>
            </form>

        </div>
        );
    }
}

export default DetalleCuentaCliente;