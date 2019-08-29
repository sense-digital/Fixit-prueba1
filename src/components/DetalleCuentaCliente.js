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
          contraseñaNueva: ''
        }
      }

      handleChange = (e) => {
        this.setState({contraseñaNueva: e.target.value})
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

      actualizacionContraseña() {
        
        var newPassword = this.state.contraseñaNueva;

        firebase.auth().currentUser.updatePassword(newPassword).then(function() {
          alert('Se ha actualizado tu contraseña correctamente')
        }).catch(function(error) {
          // An error happened.
        });
      }

      componentWillMount () {
        this.authListener();      
      }

    render () {
        return (
        <div>
            
            <h2>Detalles de mi cuenta</h2>

            {this.state.data.map(data=>{return(<p key={data.id}>{data.nombre}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.apellido}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.direccion}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.detalleDireccion}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.correo}</p>)})}
            {this.state.data.map(data=>{return(<p key={data.id}>{data.celular}</p>)})}

            <h3>Cambio de contraseña:</h3>
            
            <form>
              <label>Contraseña nueva
                <input type='password' onChange={this.handleChange}  ></input>
              </label>
            </form> 

            <button onClick={()=>this.actualizacionContraseña()}>Cambiar contraseña</button>

        </div>
        );
    }
}

export default DetalleCuentaCliente;