import React, {Component} from 'react';
import Login from '../pages/Login';
import AdminFixit from '../pages/AdminFixit';
import firebase from 'firebase/app';
import 'firebase/auth';

class AppLogin extends Component {
 

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

        // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        //   });  
        
        
        // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        //   });
 
    render () {
        return (
        <div>
        {this.state.user ? (<AdminFixit/>):(<Login/>)}
        </div>
        

        );
    }
}

export default AppLogin;