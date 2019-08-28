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
          data:[],
        }
      }
    
      componentDidMount () {
        firebase.firestore().collection('reservas').orderBy('fechaDeSolicitud', "desc").get().then((snapShots)=>{
          this.setState({
            data: snapShots.docs.map(doc => {
              return {data: doc.data(), id: doc.id}
            })
          })
        })
      }

      delete = (id)=>{
        firebase.firestore().collection("reservas").doc(id).delete().then(function() {
          alert('Tu reserva ha sido borrada, ACTULIZA PARA VER LOS CAMBIOS');
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }

    render () {
        return (
        <div>
          <ReactTable
            columns={[
              {
              Header: 'Nombre',
              accessor: 'data.nombre',
              style:{ textAlign:'center'},
              width: 50,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Apellido',
              accessor: 'data.apellido',
              width: 50,
              style:{ textAlign:'center'},
              },
              {
                Header: 'Equipo',
                accessor: 'data.equipo',
                width: 60,
                style:{ textAlign:'center'},
              },
              {
              Header: 'Servicio',
              accessor: 'data.servicio',
              style:{ textAlign:'center'},
              },
              {
              Header: 'Dirección',
              accessor: 'data.direccion',
              style:{ textAlign:'center'},
              },
              {
              Header: 'Fecha',
              accessor: 'data.fechaDeRecogida',
              width: 70,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Hora',
              accessor: 'data.hora',
              width: 70,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Valor',
              accessor: 'data.precio',
              width: 50,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Correo',
              accessor: 'data.mail',
              style:{ textAlign:'center'},
              },
              {
              Header: 'Celular',
              accessor: 'data.celular',
              width: 70,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Pago',
              accessor: 'data.pago',
              width: 60,
              style:{ textAlign:'center'},
              },
              {
              Header: 'Estado',
              accessor: 'data.estado',
              width: 60,
              style:{ textAlign:'data.center'},
              },
              {
              Header: 'Actions',
              sortable: false, 
              Cell: props =>{return [<button>Edit</button>,<button onClick={()=>this.delete(props.original.id)}>Delete</button>]},
              style:{ textAlign:'center'},
              },
            ]}
            data={this.state.data}
            defaultPageSize={10}
            showPageSizeOptions={false}
            resolveData={data => data.map(row => row)}
            />

        </div>
        );
    }
}

export default Reservas;