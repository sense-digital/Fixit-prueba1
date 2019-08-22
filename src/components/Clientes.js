//SECCIÓN DE CLIENTES DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

// import admin from 'firebase-admin';

class Clientes extends Component {
    constructor () {
        super() 
        this.state = {
          data:[],
        }
      }
    
      componentDidMount () {
        firebase.firestore().collection('usuarios').orderBy('fechaDeInscripcion').get().then((snapShots)=>{
          this.setState({
            data: snapShots.docs.map(doc => {
              return (doc.data());
            })
          })
        })
        console.log (this.state.data)
    }

    render () {
        return (
        <div>
{/* INICIO TABLA DE USUARIOS ACTUALES   */}

            <table >
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Correo</th>
                </tr>
                </thead>
                <tbody>
                 {this.state && this.state !== undefined ? this.state.data.map(item => {
                     return (<tr key={item.fechaDeInscripcion}>
                         <td>{item.nombre + ' ' + item.apellido }</td>
                         <td>{item.direccion + ' | ' + item.detalleDireccion}</td>
                         <td>{item.correo}</td>
                     </tr>)
                 } ):null}
                </tbody>
             </table>

{/* FIN TABLA DE USUARIOS ACTUALES   */}
        </div>
        );
    }
}

export default Clientes;