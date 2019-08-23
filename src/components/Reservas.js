//SECCIÓN DE RESERVAS DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Reservas extends Component {
    constructor () {
        super() 
        this.state = {
          data:[] 
        }
      }
    
      componentDidMount () {
        firebase.firestore().collection('reservas').orderBy('fechaDeSolicitud', "desc").get().then((snapShots)=>{
          this.setState({
            data: snapShots.docs.map(doc => {
              return (doc.data());
            })
          })
        })
        
      }

      delete = (id)=>{
       console.log (id)       
       console.log(this.state.data)
        // firebase.firestore().collection("reservas").doc("id").delete().then(function() {
        //     console.log("Document successfully deleted!");
        // }).catch(function(error) {
        //     console.error("Error removing document: ", error);
        // });
      }

    render () {
        return (
        <div>

          <ReactTable
            columns={[
              {
              Header: 'Nombre',
              accessor: 'nombre',
              style:{ textAlign:'center'},
              width: 50,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Apellido',
              accessor: 'apellido',
              width: 50,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Servicio',
              accessor: 'servicio',
              style:{ textAlign:'center'},
              },
              {
              Header: 'Equipo',
              accessor: 'equipo',
              width: 60,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Dirección',
              accessor: 'direccion',
              style:{ textAlign:'center'},
              },
              {
              Header: 'Fecha',
              accessor: 'fechaDeRecogida',
              width: 70,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Hora',
              accessor: 'hora',
              width: 70,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Valor',
              accessor: 'precio',
              width: 50,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Correo',
              accessor: 'mail',
              style:{ textAlign:'center'},
              },
              {
              Header: 'Celular',
              accessor: 'celular',
              width: 70,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Pago',
              accessor: 'pago',
              width: 60,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Estado',
              accessor: 'estado',
              width: 60,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Actions',
              sortable: false, 
              Cell: props =>{return [<button>Edit</button>,<button>Delete</button>]},
              style:{ textAlign:'center'},
              },
            ]}
            data={this.state.data}
            defaultPageSize={10}
          ></ReactTable>
        </div>
        );
    }
}

export default Reservas;