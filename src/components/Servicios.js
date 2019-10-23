//SECCIÓN DE SERVICIOS PRESTADOS DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './styles/Servicios.css';

class Servicios extends Component {
    constructor () {
        super()
        
        this.state = {
          imageEquipo: null,
          dataServicios:[],
          dataEquipos:[],
          NuevoEquipo:'',
          equipo:'',
          servicio:'',
          precio:''
        }
      }



      storageActivation () {
        firebase.storage()
      }

      handleUploadEquipo = (e) => {
        if(e.target.files[0]){
          const imageEquipo = e.target.files[0];
          this.setState(()=>({imageEquipo}));
        }
      }
      
      handleUploadServicio = (e) => {
        if(e.target.files[0]){
          const imageServicio = e.target.files[0];
          this.setState(()=>({imageServicio}));
        }
      }
      


     
      guardarCelularEnBaseDeDatos() {
        const imageEquipo = this.state.imageEquipo;
         if (this.state.NuevoEquipo && this.state.imageEquipo ){
          firebase.storage().ref(`celulares/${imageEquipo.name}`).put(imageEquipo).on('state_changed', 
        //progress
          (snapshot) => {

        } , 
        //error
        (error) => {
          console.log(error);
        }, 
        //completed
        ()=>{
          firebase.storage().ref(`celulares`).child(imageEquipo.name).getDownloadURL().then( url => {

            firebase.firestore().collection('celulares').add({
              ref: this.state.NuevoEquipo,
              urlImage: url
             })
             .then(function() {
              window.location.reload(false);
              })        
            } )        
        });
      }
      else {
        alert("diligencia los datos completos")
      }
       }




       guardarServicioEnBaseDeDatos() {

        if (this.state.precio && this.state.servicio  && this.state.equipo ){
        firebase.firestore().collection('servicios').add({
          equipo: this.state.equipo,
          servicio: this.state.servicio,
          precio: this.state.precio,
          })
          .then(function() {
            setTimeout(()=>window.location.reload(false), 3000);
           })}else {
            alert("diligencia los datos completos")
           }

    //     const {imageServicio} = this.state;
    //     if (this.state.precio && this.state.imageServicio && this.state.servicio  && this.state.equipo ){
    //      firebase.storage().ref(`servicios/${imageServicio.name}`).put(imageServicio).on('state_changed', 
    //    //progress
    //      (snapshot) => {

    //    } , 
    //    //error
    //    (error) => {
    //      console.log(error);
    //    }, 
    //    //completed
    //    ()=>{
    //      firebase.storage().ref(`servicios`).child(imageServicio.name).getDownloadURL().then( url => {

      // firebase.firestore().collection('servicios').add({
      //   equipo: this.state.equipo,
      //   servicio: this.state.servicio,
      //   precio: this.state.precio,
      //   })
      //   .then(function() {
      //     setTimeout(()=>window.location.reload(false), 3000);
      //    })
    //        } )        
    //    });
    //  }
    //  else {
    //    alert("diligencia los datos completos")
    //  }
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

            <div className='equipo-title'><h3>Agrega un equipo:</h3></div>

            <div className='form-nuevoequipo'>
               <label>
                Equipo
               <input type="text" name="NuevoEquipo" onChange={this.handleChange}  />
               </label>
             
               <label>
                Foto
               <input type="file"  accept="image/x-png,image/jpeg" onChange={this.handleUploadEquipo}  />
               </label>
               
               <button onClick={()=>this.guardarCelularEnBaseDeDatos()}> Crear </button>
            </div> 

            <div className='servicio-title'><h3>Agrega un servicio:</h3></div>

            <div className='form-nuevoservicio'>
               <label>
                Equipo: 
                <select name="equipo" onChange={this.handleChange} id="equipoCreado" >
                <option value="">Elige una opción</option>
                {this.state.dataEquipos.map(item => {
                  return <option v alue={item.data.ref}>{item.data.ref}</option> 
                }) }
                </select>
               </label>

               <label>
                Servicio:
               <input type="text" name="servicio" onChange={this.handleChange}/>
               </label>
               <label>
                Precio: 
               <input type="number" name="precio" onChange={this.handleChange} />
               </label>
            
               
               <button  onClick={()=>this.guardarServicioEnBaseDeDatos()}> Crear </button>
             </div>

{/* FIN AGREGA UN EQUIPO Y UN SERVICIO   */}

{/* INICIO TABLA DE EQUIPOS ACTUALES   */}

<div className='equipo-title'><h2>Celulares</h2></div>
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
 <div className='equipo-title'><h2>Servicios</h2></div>
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