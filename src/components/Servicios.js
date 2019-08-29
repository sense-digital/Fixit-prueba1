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
          dataEquipos:[],
          NuevoEquipo:'',
          equipo:'',
          servicio:'',
          precio:''
        }
      }


      guardarCelularEnBaseDeDatos() {
        return firebase.firestore().collection('celulares').add({
          ref: this.state.NuevoEquipo
         })
         .then(function() {
          window.location.reload(false);
          })        
       }

       guardarServicioEnBaseDeDatos() {
        return firebase.firestore().collection('servicios').add({
          equipo: this.state.equipo,
          servicio: this.state.servicio,
          precio: this.state.precio,
         })
         .then(function() {
          window.location.reload(false);
           })
       }

      handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
     }

      eliminarCelulares(id){
        firebase.firestore().collection("celulares").doc(id).delete().then(function() {
          window.location.reload(false);
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }

      eliminarServicios(id){
        firebase.firestore().collection("servicios").doc(id).delete().then(function() {
          window.location.reload(false);
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
            Equipo
            <input type="text" name="NuevoEquipo" onChange={this.handleChange} />
            </label>
            <br/>
            <label>
            Foto
            <input type="file" name="" accept="image/x-png,image/jpeg" />
            </label>
            <br/>
            <button onClick={()=>this.guardarCelularEnBaseDeDatos()}> Crear </button>

          <h3>Agrega un servicio:</h3>

            <label>
                Equipo: 
                <select name="equipo" onChange={this.handleChange} >
                <option value="">Elige una opción</option>
                {this.state.dataEquipos.map(item => {
                  return <option value={item.data.ref}>{item.data.ref}</option> 
                }) }
                </select>
            </label>

            <label>
                Servicio:
            <input type="text" name="servicio" onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
                Precio: 
            <input type="number" name="precio" onChange={this.handleChange} />
            </label>
            
            <label>
            Foto
            <input type="file" name="" accept="image/x-png,image/jpeg" />
            </label>
            <br/>
            <button  onClick={()=>this.guardarServicioEnBaseDeDatos()}> Crear </button>

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
            defaultPageSize={5}
            showPageSizeOptions={false}
            />

{/* FIN TABLA DE SERVICIOS ACTUALES   */}

        </div>
        );
    }
}

export default Servicios;