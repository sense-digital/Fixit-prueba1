//SECCIÓN DE SERVICIOS PRESTADOS DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class Servicios extends Component {
    constructor () {
        super() 
        this.state = {
          dataServicios:[],
          dataEquipos:[] 
        }
      }
    
      componentDidMount () {
        firebase.firestore().collection('servicios').orderBy('equipo').get().then((snapShots)=>{
          this.setState({
            dataServicios: snapShots.docs.map(doc => {
              return (doc.data());
            })
          })
        })

        firebase.firestore().collection('celulares').orderBy('ref').get().then((snapShots)=>{
          this.setState({
            dataEquipos: snapShots.docs.map(doc => {
              return (doc.data());
            })
          })
        })
      }

   
    render () {
        return (
        <div>
          
{/* INICIO AGREGA UN EQUIPO Y UN SERVICIO   */}

            <h3>Agrega un equipo:</h3>

            <label>
            Equipo<br/>
            <input type="text" name="equipo" />
            </label>

            <label>
            Foto<br/>
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" />
            </label>

            <button> Crear </button>

          <h3>Agrega un servicio:</h3>

            <label>
                Equipo: <br/>
                <select name="hora" onChange={this.handleChange} value={this.state.hora}>
                <option value="">Elige una opción</option>
                {this.state.dataEquipos.map(item => {
                  return <option value={item.ref}>{item.ref}</option> 
                }) }
                </select>
            </label>
            
            <label>
                Servicio: <br/>
            <input type="text" name="equipo" />
            </label>

            <label>
                Precio: <br/>
            <input type="number" name="equipo" />
            </label>

            <label>
            Foto<br/>
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" />
            </label>

            <button> Crear </button>

{/* FIN AGREGA UN EQUIPO Y UN SERVICIO   */}

{/* INICIO TABLA DE SERVICIOS ACTUALES   */}

            <table striped>
                <thead>
                <tr>
                    <th>Equipo</th>
                    <th>Precio</th>
                    <th>Servicio</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                 {this.state && this.state !== undefined ? this.state.dataServicios.map(item => {
                     return (<tr key={item.fechaDeSolicitud}>
                         <td>{item.equipo}</td>
                         <td>{item.precio}</td>
                         <td>{item.servicio}</td>
                         <td><button>Eliminar</button></td>
                     </tr>)
                 } ):null}
                </tbody>
             </table>

{/* FIN TABLA DE SERVICIOS ACTUALES   */}

        </div>
        );
    }
}

export default Servicios;