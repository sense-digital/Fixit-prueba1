import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservasCliente from '../components/ReservasCliente'
import DetalleCuentaCliente from '../components/DetalleCuentaCliente'
import {Route, Redirect, Link, Switch} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './styles/AdminCliente.css';
import camilocastro from '../images/CamiloCastro.jpg';

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
        firebase.firestore().collection('usuarios').where("correo", '==',this.state.user.email).get().then((snapShots)=>{
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
        <div style={{backgroundColor:'#F2F2F2'}}>
            <Header/>
            <div style={{
                     maxWidth:'90%',
                     backgroundColor:'white',
                     margin:'0 auto',
                     marginBottom:'0',
                     height:'50px',
                     boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                     position:'relative',
                     zIndex:'1',
                     }}>
                <h3 style={{marginBottom:'0', height:'50px',
                     display:'flex',
                     justifyContent:'center',
                     alignItems:'center',
                     fontSize:'30px',
                     height:'8vh',

                     }}>MI CUENTA</h3></div>

             <div className='admin-page' style={{
                 boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)', 
                 maxWidth:'90%',
                 margin:'12px auto',
                 height:'80vh',
                 }}>
               <div className='admin-menu'style={{
                   backgroundColor:'white',
                   paddingLeft:'25px',
                   borderRight:'2px solid #DDDDDD',
               }}>
                   <img src={camilocastro} alt='usuario' style={{
                       width:'100%',
                       clipPath:'circle(32% at 50% 50%)',
                       boxShadow:'0px 2px 6px 0px grey',
                       marginBottom:'0',
                   }}></img>
                  {this.state.data.map(data=>{return( <h2 style={{color:'#ABABAB', fontWeight:'normal'}} key={data.id}>{data.nombre} {data.apellido}</h2>)})}
                   <div className='linkto1' style={{borderTop:'none'}}><Link to="/admincliente/reservas" style={{color:'black',}}>RESERVAS</Link> <br/></div>
                   <div className='linkto1' style={{borderBottom:'0.1px solid #DDDDDD'}}><Link to="/admincliente/detalles" style={{color:'black',}}>DETALLES DE LA CUENTA</Link> <br/></div>
                
                 <button className='admin-exit-button' onClick={this.logout}>Cerrar sesión</button>
               </div>
               <div className='display-info-container' style={{
                   backgroundColor:'white',
                   height:'80vh',
               }}>
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