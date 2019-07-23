import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/logincliente.css';
import { Link } from 'react-router-dom';
import logofixit from '../images/logofixitsintexto.png';

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
        <div >
           
           <Header/>
           <div className='login-page-container'>
            <Link to='/' > 
               <figure ><img className='logologin' src={logofixit} alt='logofixit'></img></figure>
            </Link><br/>  
            <section className='form-login-container'>
               <form className='campos-formulario-login'>    
                 <div className='item-form-login'><label > Correo:</label></div>
                 <div className='item-form-login'><input type="text" name="mail" onChange={this.handleChange}/></div>
                 <div className='item-form-login'><label >Contraseña:</label></div>
                 <div className='item-form-login'><input type="password" name="password" onChange={this.handleChange}/></div>
               </form>
                 <section className='botones-formulario-login'>
                 <div className='item-form-login'><button name="login" onClick={this.login}>Inicio de sesión </button></div>
                 <div className='item-form-login'><button name="register" onClick={this.register}>Registro</button></div>
                 <div className='item-form-login'><button name="authGoogle" onClick={this.authGoogle}>Google</button></div>
               </section>
            </section>
            <div className='forgot-my-password'>
            <Link to='/adminfixit/servicios' >Olvidé mi contraseña</Link><br/>
            {/* <p>Olvidé mi contraseña</p> */}
            </div>
           </div>

            <Footer/>
        </div>
        

        );
    }
}

export default LoginCliente;