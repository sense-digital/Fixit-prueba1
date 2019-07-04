import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Route, Link} from 'react-router-dom';
import Clientes from '../components/Clientes';
import Reservas from '../components/Reservas';
import Servicios from '../components/Servicios';
import SliderPromocional from '../components/SliderPromocional';
import Contabilidad from '../components/Contabilidad';

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
        <div>
            <h1>AdminFixit</h1>

            <Link to="/AdminFixit/clientes">Clientes</Link> <br/>
            <Link to="/AdminFixit/reservas">Reservas</Link> <br/>
            <Link to='/AdminFixit/servicios'>Servicios ofrecidos</Link>
            <Link to="/AdminFixit/sliderpromocional">Slider promocional</Link> <br/>
            <Link to="/AdminFixit/contabilidad">Contabilidad</Link> <br/>

            <Route  exact path="/AdminFixit/clientes" component={Clientes} />
            <Route  path="/AdminFixit/reservas" component={Reservas} />
            <Route  path="/AdminFixit/servicios" component={Servicios} />
            <Route  path="/AdminFixit/sliderpromocional" component={SliderPromocional} />
            <Route  path="/AdminFixit/contabilidad" component={Contabilidad} />

            <button onClick={this.logout}>Cerrar sesión</button>
        </div>
        

        );
    }
}

export default AdminFixit;