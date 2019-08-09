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
            name: '',
            apellido: '',
            direccion: '',
            detalleDireccion: ''
        }
        this.db = firebase.firestore()  
      }

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

        createUserDataBase(result) {
            return this.db.collection('usuarios').add({
              nombre : this.state.name,
              apellido : this.state.apellido,
              correo : this.state.mail,
              direccion: this.state.direccion,
              detalleDireccion : this.state.detalleDireccion,
              tipoUsuario:'cliente',
              id:result.user.uid,
              fechaDeSolicitud: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        

        register (e) {
            e.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password)
            .then( result => 
              {this.createUserDataBase(result) 
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
           <div className=''>
            <Link to='/' > 
               <figure ><img width='100px' className='logologin' src={logofixit} alt='logofixit'></img></figure>
            </Link><br/>  
            <section className='form-login-container'>
              <h1>Login</h1>
               <form className='campos-formulario-login'>    
                 <div className='item-form-login'><label > Nombre:</label></div>
                 <div className='item-form-login'><input type="text" name="mail" onChange={this.handleChange}/></div>
                 <div className='item-form-login'><label >Contraseña:</label></div>
                 <div className='item-form-login'><input type="password" name="password" onChange={this.handleChange}/></div>
               </form>
                 <section className='botones-formulario-login'>
                 <div className='item-form-login'><button name="login" onClick={this.login}>Inicio de sesión </button></div>
                 <div className='item-form-login'><button name="authGoogle" onClick={this.authGoogle}>Google</button></div>
               </section>
            </section>
            <div className='forgot-my-password'>
            <Link to='/adminfixit/servicios' >Olvidé mi contraseña</Link><br/>
            </div>
           
            <section className='form-login-container'>
            <h1>Registro</h1>
               <form className='campos-formulario-login'>    
                 <div className='item-form-login'><label > Nombre:</label></div>
                 <div className='item-form-login'><input type="text" name="name" onChange={this.handleChange}/></div>
                 <div className='item-form-login'><label > Apellido:</label></div>
                 <div className='item-form-login'><input type="text" name="apellido" onChange={this.handleChange}/></div>
                 <div className='item-form-login'><label > Correo:</label></div>
                 <div className='item-form-login'><input type="text" name="mail" onChange={this.handleChange}/></div>
                 <div className='item-form-login'><label > Dirección:</label></div>
                 <div className='item-form-login'><input type="text" name="direccion" onChange={this.handleChange}/></div>
                 <div className='item-form-login'><label > Detalle dirección:</label></div>
                 <div className='item-form-login'><input type="text" name="detalleDireccion" onChange={this.handleChange}/></div>
                 <div className='item-form-login'><label >Contraseña:</label></div>
                 <div className='item-form-login'><input type="password" name="password" onChange={this.handleChange}/></div>
               </form>
                <section className='botones-formulario-login'>
                 <div className='item-form-login'><button name="register" onClick={this.register}>Registro</button></div>
                 <div className='item-form-login'><button name="authGoogle" onClick={this.authGoogle}>Google</button></div>
               </section>
            </section>
           </div>
            <Footer/>
        </div>
        );
    }
}

export default LoginCliente;