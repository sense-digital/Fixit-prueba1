import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';

class LoginCliente extends Component {
        constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.authGoogle = this.authGoogle.bind(this);
        this.state = {
            mail: '',
            password: '',
        }}

        authGoogle () {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });

        }
        
        login (e) {
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(this.state.mail, this.state.password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
        }

        register (e) {
            e.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });  
        }

        handleChange(e) {
            this.setState({[e.target.name]: e.target.value});
        }

        
        
        
        
 
    render () {
        return (
        <div>
           
           <Header/>
           
            <h1> Inicio de sesión / Registro </h1>

            <form >    
                <br/>
                    <label > Correo:</label>
                    <input type="text" name="mail" onChange={this.handleChange}/>
                <br/>
                <br/>
                    <label >Contraseña:</label>
                    <input type="password" name="password" onChange={this.handleChange}/>
                <br/>
                <br/>
                    <button name="login" onClick={this.login}>Inicio de sesión </button>
                    <button name="register" onClick={this.register}>Registro</button>
            </form>

            <button name="authGoogle" onClick={this.authGoogle}>Google</button>
            

            <Footer/>
        </div>
        

        );
    }
}

export default LoginCliente;