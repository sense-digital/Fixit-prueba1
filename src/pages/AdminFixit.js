import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
import Clientes from '../components/Clientes';
import Reservas from '../components/Reservas';
import Servicios from '../components/Servicios';
import SliderPromocional from '../components/SliderPromocional';
import Contabilidad from '../components/Contabilidad';
import './styles/AdminFixit.css';
import logofixit from '../images/logofix-it.png';



class AdminFixit extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        firebase.auth().signOut();
    }

    render () {
        return (
        <div className='admin-page'>
      
         <div className='admin-menu'>
            <img src={logofixit} alt='logofixit'></img>
             <div className='linkto1'><Link to="/adminfixit/clientes">Clientes</Link> <br/></div>
             <div className='linkto1'><Link to="/adminfixit/reservas">Reservas</Link> <br/></div>
             <div className='linkto1'><Link to='/adminfixit/servicios'>Servicios ofrecidos</Link> <br/></div>
             <div className='linkto1'><Link to="/adminfixit/sliderpromocional">Slider promocional</Link> <br/></div>
             <div className='linkto1'><Link to="/adminfixit/contabilidad">Contabilidad</Link> <br/></div>

            <button onClick={this.logout} className='admin-exit-button'>Cerrar sesión</button>

         </div>
         <div className='display-info-container'>
           <figure className='display-info-inside'>
        <Switch>
            <Route  path="/adminfixit/clientes" component={Clientes} />
            <Redirect exact from="/adminfixit" to="/adminfixit/clientes"/>
            <Route  path="/adminfixit/reservas" component={Reservas} />
            <Route  path='/adminfixit/servicios' component={Servicios} />
            <Route  path="/adminfixit/sliderpromocional" component={SliderPromocional} />
            <Route  path="/adminfixit/contabilidad" component={Contabilidad} />
        </Switch>
           </figure>  
         </div>
        </div>
        );
    }
}

export default AdminFixit;