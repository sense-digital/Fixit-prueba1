import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
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

            <Link to="/adminfixit/clientes">Clientes</Link> <br/>
            <Link to="/adminfixit/reservas">Reservas</Link> <br/>
            <Link to='/adminfixit/servicios'>Servicios ofrecidos</Link> <br/>
            <Link to="/adminfixit/sliderpromocional">Slider promocional</Link> <br/>
            <Link to="/adminfixit/contabilidad">Contabilidad</Link> <br/>

        <Switch>
            <Route  path="/adminfixit/clientes" component={Clientes} />
            <Redirect exact from="/adminfixit" to="/adminfixit/clientes"/>
            <Route  path="/adminfixit/reservas" component={Reservas} />
            <Route  path='/adminfixit/servicios' component={Servicios} />
            <Route  path="/adminfixit/sliderpromocional" component={SliderPromocional} />
            <Route  path="/adminfixit/contabilidad" component={Contabilidad} />
        </Switch>

            <button onClick={this.logout}>Cerrar sesión</button>
        </div>
        );
    }
}

export default AdminFixit;