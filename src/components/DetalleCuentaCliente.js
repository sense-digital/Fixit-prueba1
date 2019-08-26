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
          user: {},
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
      });}

      componentDidMount () {
        firebase.firestore().collection('usuarios').where("mail", '==','{'+this.state.user.email+'}').get().then((snapShots)=>{
          this.setState({
            data: snapShots.docs.map(doc => {
              return (doc.data());
            })
          })
        })
        this.authListener();
    }

    render () {
        return (
        <div>
            <h1>{this.state.user.email}</h1>
        </div>
        );
    }
}

export default DetalleCuentaCliente;