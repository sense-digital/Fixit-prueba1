//SECCIÓN DE CLIENTES DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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
    }

    render () {
        return (
        <div>
{/* INICIO TABLA DE USUARIOS ACTUALES   */}

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
              Header: 'Dirección',
              accessor: 'direccion',
              style:{ textAlign:'center'},
              },
              {
              Header: 'Detalle',
              accessor: 'detalleDireccion',
              style:{ textAlign:'center'},
              },
              {
                Header: 'Correo',
                accessor: 'correo',
                style:{ textAlign:'center'},
                },
            ]}
            data={this.state.data}
            defaultPageSize={10}
            showPageSizeOptions={false}
            />

{/* FIN TABLA DE USUARIOS ACTUALES   */}
        </div>
        );
    }
}

export default Clientes;