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
            firebase.auth().signInWithPopup(provider)
                .then(function(result) {
                  result.user.updateProfile()            
              }).catch(function(error) {
               alert(error)
              });

        }
        
        login (e) {
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(this.state.mail, this.state.password)
            .then(result => {
              // result.user.updateProfile()
            })
            .catch(function(error) {
                alert(`Se ha presentado el siguiente error: ${error}`)
              });
        }

        register (e) {
            e.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password)
            .then(result => {
              // return  this.login();
            })
            .catch(function(error) {
            alert(`Se ha presentado el siguiente error: ${error}`)
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
            </div>
           </div>

            <Footer/>
        </div>
        

        );
    }
}

export default LoginCliente;