import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/ForgotMyPassword.css';

class ForgotMyPassword extends Component {
  render () {
      return (
         <React.Fragment>
         <Header/>
  
  {/* INICIO DE FORMULARIO DE RECUPERACION DE PASSWORD */}
               <div className="form-FMP-container">
                     <div className="fmp-title-container"><h2>RECUPERAR CONTRASEÑA</h2></div>
                     <p>Escribe el correo electrónico o nombre de usuario con el que te registraste. Te enviaremos un correo electronico con las instrucciones para restaurar tu contraseña</p>
                     <form action="" className="form-ForgotMyPassword">
                            <div className='form-fmp-container'>
                                  <div className='item-form-forgotMP' ><label for='nyu3'>Nombre o Usuario</label></div>
                                  <div className='item-form-forgotMP'><input id='nyu3' type="text"></input></div>
                                  <div className='item-form-forgotMP' ><label for='email2'>Correo electrónico</label></div>
                                  <div className='item-form-forgotMP'><input id='email2' type="text"></input></div>
                                  <div className='item-form-forgotMP'></div><button type='submit' className="boton-formulario-password" action=''>Enviar</button>
                            </div> 
                      </form>      
               </div>              
  {/* FIN DE FORMULARIO DE RECUPERACION DE PASSWORD */}
  <Footer/>
        </React.Fragment>
        );
      }
  }

  export default ForgotMyPassword;