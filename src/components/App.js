// COMPONENTE QUE DIRECCIONA TODOS LOS LINKS DE LA PÁGINA

import React, {Component} from 'react';
import Home from '../pages/Home';
import AppAdminCliente from '../components/AppAdminCliente';
import AppLogin from '../components/AppLogin';
import Soporte from '../pages/Soporte';
import Trabajo from '../pages/Trabajo';
import ThankYou from '../pages/ThankYou';
import NotFound from '../pages/NotFound';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            user:{},
        }
    }

    componentDidMount(){
        this.authListener();
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
      });}

    render() {


        // RUTAS DE LA PAGINA
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Redirect exact from="/" to="/home"/>
                <Route exact path="/admincliente" component={AppAdminCliente} />
                <Route exact path="/soporte" component={Soporte} />
                <Route exact path="/trabajo" component={Trabajo} />
                <Route exact path="/thankyou" component={ThankYou} />
                <Route path="/adminfixit" component={AppLogin} />
                <Redirect exact from="/login" to="/adminfixit"/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
        );
}}

export default App;