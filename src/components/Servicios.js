//SECCIÓN DE SERVICIOS PRESTADOS DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Servicios extends Component {
    constructor () {
        super() 
        this.state = {
          dataServicios:[],
          dataEquipos:[] 
        }
      }
    
      eliminarCelulares(id){
        firebase.firestore().collection("celulares").doc(id).delete().then(function() {
          alert('El equipo ha sido borrada, ACTULIZA PARA VER LOS CAMBIOS');
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }

      eliminarServicios(id){
        firebase.firestore().collection("servicios").doc(id).delete().then(function() {
          alert('Este servicio ha sido borrada, ACTULIZA PARA VER LOS CAMBIOS');
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }


      componentDidMount () {
        firebase.firestore().collection('servicios').orderBy('equipo').get().then((snapShots)=>{
          this.setState({
            dataServicios: snapShots.docs.map(doc => {
              return {data: doc.data(),id: doc.id};
            })
          })
        })
        firebase.firestore().collection('celulares').orderBy('ref').get().then((snapShots)=>{
          this.setState({
            dataEquipos: snapShots.docs.map(doc => {
              return {data: doc.data(),id: doc.id};
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

{/* INICIO TABLA DE EQUIPOS ACTUALES   */}

<h2>Celulares</h2>
<ReactTable
            columns={[
              {
              Header: 'Equipo',
              accessor: 'data.ref',
              style:{ textAlign:'center'},
              style:{ textAlign:'center'},
              },
              {
                Header: 'Actions',
                sortable: false, 
                Cell: props =>{return [<button onClick={()=>this.eliminarCelulares(props.original.id)}>Eliminar</button>]},
                style:{ textAlign:'center'},
              },
            ]}
            data={this.state.dataEquipos}
            defaultPageSize={5}
            showPageSizeOptions={false}
            />


{/* FIN TABLA DE EQUIPOS ACTUALES   */}
{/* INICIO TABLA DE SERVICIOS ACTUALES   */}
<h2>Servicios</h2>
<ReactTable
            columns={[
              {
              Header: 'Equipo',
              accessor: 'data.equipo',
              style:{ textAlign:'center'},
              style:{ textAlign:'center'},
              },
              {
              Header: 'Precio',
              accessor: 'data.precio',
              style:{ textAlign:'center'},
              },
              {
              Header: 'Servicio',
              accessor: 'data.servicio',
              style:{ textAlign:'center'},
              },
              {
                Header: 'Actions',
                sortable: false, 
                Cell: props =>{return [<button onClick={()=>this.eliminarServicios(props.original.id)}>Eliminar</button>]},
                style:{ textAlign:'center'},
                },
            ]}
            data={this.state.dataServicios}
            defaultPageSize={10}
            showPageSizeOptions={false}
            />



{/* FIN TABLA DE SERVICIOS ACTUALES   */}

        </div>
        );
    }
}

export default Servicios;