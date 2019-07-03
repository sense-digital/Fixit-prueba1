// COMPONENTE QUE DIRECCIONA TODOS LOS LINKS DE LA PÁGINA

import React, {Component} from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AdminCliente from '../pages/AdminCliente';
import AppLogin from '../components/AppLogin';
import Soporte from '../pages/Soporte';
import Trabajo from '../pages/Trabajo';
import ThankYou from '../pages/ThankYou';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
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

    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/home" component={Home} />
                <Redirect exact from="/" to="/home"/>
                <Route exact path="/admincliente" component={AdminCliente} />
                <Route exact path="/soporte" component={Soporte} />
                <Route exact path="/trabajo" component={Trabajo} />
                <Route exact path="/thankyou" component={ThankYou} />
                <Route exact path="/login" component={AppLogin} />
                <Redirect exact from="/adminfixit" to="/login"/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
        </BrowserRouter>
        );
}}

export default App;