//SECCIÓN DE RESERVAS CLIENTE DEL PANEL DE ADMINISTRACIÓN CLIENTE

import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import 'firebase/auth';


class ReservasCliente extends Component {
    constructor () {
      super() 
      this.state = {
        data:[],
        user:{},
      }      
    }
    

    llamadoFirebase () {
      firebase.firestore().collection('reservas').where("mail", '==',this.state.user.email).get().then((snapShots)=>{
        this.setState({
          data: snapShots.docs.map(doc => {
            return (doc.data());
          })
        })
      })          
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
          this.llamadoFirebase();
        })
      }

    componentWillMount () {
      this.authListener();      
    }

      
    render () {
        return (
        <div>
          <h2>Mis reservas</h2>
           
           

           
            <ReactTable
            columns={[
                    {
                    Header: 'Servicio',
                    accessor: 'servicio',
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
                    Header: 'Pago',
                    accessor: 'pago',
                    width: 80,
                    style:{ textAlign:'center'},
                    },
                    {
                    Header: 'Estado',
                    accessor: 'estado',
                    width: 60,
                    style:{ textAlign:'center'},
                    },
                ]}
                data={this.state.data}
                defaultPageSize={10}
                showPagination={false}
                resizable={false}
            ></ReactTable>
            
        </div>
        );
    }
}

export default ReservasCliente;