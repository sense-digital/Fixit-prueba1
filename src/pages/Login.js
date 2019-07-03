import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Login extends Component {
        constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.state = {
            correo: '',
            contraseña: '',
        }}


        login (e) {
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(this.state.correo, this.state.contraseña).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
        }

        register (e) {
            e.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(this.state.correo, this.state.contraseña).catch(function(error) {
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
            <h1> Inicio de sesión / Registro </h1>

            <form >    
                <br/>
                    <label > Correo:</label>
                    <input type="text" name="correo" onChange={this.handleChange}/>
                <br/>
                <br/>
                    <label >Contraseña:</label>
                    <input type="password" name="contraseña" onChange={this.handleChange}/>
                <br/>
                <br/>
                    <button name="login" onClick={this.login}>Inicio de sesión </button>
                    <button name="register" onClick={this.register}>Registro</button>
            </form>
            
        </div>
        

        );
    }
}

export default Login;