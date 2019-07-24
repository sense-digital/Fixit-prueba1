import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Route, Link, Switch} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './styles/AdminCliente.css';
import camilocastro from '../images/CamiloCastro.jpg';

class AdminCliente extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        firebase.auth().signOut();
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
                     height:'50px;',
                     boxShadow:'-5px -4px 30px rgba(0, 0, 0, 0.25)',
                     position:'relative',
                     zIndex:'1',
                     }}>
                <h3 style={{marginBottom:'0', height:'50px',
                     display:'flex',
                     justifyContent:'center',
                     alignItems:'center',
                     fontSize:'30px',

                     }}>MI CUENTA</h3></div>

             <div className='admin-page' style={{
                 boxShadow:' -5px -4px 30px rgba(0, 0, 0, 0.25)', 
                 maxWidth:'90%',
                 margin:'12px auto',
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
                   <h2 style={{color:'#ABABAB', fontWeight:'normal'}}>Camilo Castro</h2> 
                   <div className='linkto1' style={{borderTop:'none'}}><Link to="/admincliente" style={{color:'black',}}>RESERVAS</Link> <br/></div>
                   <div className='linkto1' style={{borderBottom:'0.1px solid #DDDDDD'}}><Link to="/admincliente" style={{color:'black',}}>DETALLES DE LA CUENTA</Link> <br/></div>
                
                 <button className='admin-exit-button' onClick={this.logout}>Cerrar sesión</button>
               </div>
               <div className='display-info-container' style={{
                   backgroundColor:'white'
               }}>
                 <figure className='display-info-inside'>
                   {/* <Switch>
                      <Route  path="/adminfixit/" component={RESERVAS} />
                      <Route  path="/adminfixit/" component={DETALLES DE LA CUENTA} />
                    </Switch> */}
                 </figure>
            
               </div>
             </div>
            <Footer/>
            
        
        </div>
        

        );
    }
}

export default AdminCliente;