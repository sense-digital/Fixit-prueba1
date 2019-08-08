//SECCIÓN DE RESERVAS DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import { Table, Button } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';

class Reservas extends Component {
    constructor () {
        super() 
        this.state = {
          data:[] 
        }
      }
    
      componentDidMount () {
        firebase.firestore().collection('reservas').orderBy('fechaDeSolicitud').get().then((snapShots)=>{
          this.setState({
            data: snapShots.docs.map(doc => {
              return (doc.data());
            })
          })
        })
      }

    render () {
        return (
        <div>
             <Table striped>
                <thead>
                <tr>
                    <th>Nombre y apellido</th>
                    <th>Servicio y equipo</th>
                    <th>Dirección</th>
                    <th>Fecha y hora</th>
                    <th>Valor a pagar</th>
                    <th>Correo</th>
                    <th>Celular</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                 {this.state && this.state !== undefined ? this.state.data.map(item => {
                     return (<tr key={item.fechaDeSolicitud}>
                         <td>{item.nombre}</td>
                         <td>{item.servicio}</td>
                         <td>{item.direccion}</td>
                         <td>{item.fechaDeRecogida}</td>
                         <td>{item.precio}</td>
                         <td>{item.correo}</td>
                         <td>{item.celular}</td>
                         <td><Button>Eliminar</Button></td>
                     </tr>)
                 } ):null}
                </tbody>
             </Table>
        </div>
        );
    }
}

export default Reservas;