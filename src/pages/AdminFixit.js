import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

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
            <button onClick={this.logout}>Cerrar sesión</button>
        </div>
        

        );
    }
}

export default AdminFixit;