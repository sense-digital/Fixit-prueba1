import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservasCliente from '../components/ReservasCliente'
import DetalleCuentaCliente from '../components/DetalleCuentaCliente'
import {Route, Redirect, Link, Switch} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './styles/AdminCliente.css';

class AdminCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            user:{},
          }      
        this.logout = this.logout.bind(this);
    }


    logout(){
        firebase.auth().signOut();
    }

    llamadoFirebase () {
       
      if (this.state.user) {
      firebase.firestore().collection('usuarios').where("correo", '==',this.state.user.email).get().then((snapShots)=>{
          this.setState({
            data: snapShots.docs.map(doc => {
              return (doc.data());
            })
          })
        }) 
      } 
      else {
        console.log("no user");
      }        
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
        <div style={{backgroundColor:'#F2F2F2'}}>
            <Header/>
            <div className='admin-client-title'>
                <h3>MI CUENTA</h3></div>

             <div className='admin-page'>
               <div className='admin-menu'>
                   {/* <img src={camilocastro} alt='usuario'></img> */}
                  {this.state.data.map(data=>{return( <h2 style={{color:'#ABABAB', fontWeight:'normal'}} key={data.id}>{data.nombre} {data.apellido}</h2>)})}
                   <div className='linkto1'><Link to="/admincliente/reservas" style={{color:'black',}}>RESERVAS</Link> <br/></div>
                   <div className='linkto1'><Link to="/admincliente/detalles" style={{color:'black',}}>DETALLES DE LA CUENTA</Link> <br/></div>
                
                 <button className='admin-exit-button' onClick={this.logout}>Cerrar sesión</button>
               </div>
               <div className='display-info-container'>
                 <figure className='display-info-inside'>
                   <Switch>
                      <Route  path="/admincliente/reservas" component={ReservasCliente} />
                      <Redirect exact from="/admincliente" to="/admincliente/reservas"/>
                      <Route  path="/admincliente/detalles" component={DetalleCuentaCliente} />
                    </Switch>
                 </figure>
            
               </div>
             </div>
            <Footer/>
            
        
        </div>
        

        );
    }
}

export default AdminCliente;