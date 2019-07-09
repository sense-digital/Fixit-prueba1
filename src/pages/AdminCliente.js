import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import firebase from 'firebase/app';
import 'firebase/auth';

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
        <div>
            <Header/>
            
            <h1>ADMIN CLIENTE</h1>
            <button onClick={this.logout}>Cerrar sesión</button>

            <Footer/>
            
        
        </div>
        

        );
    }
}

export default AdminCliente;