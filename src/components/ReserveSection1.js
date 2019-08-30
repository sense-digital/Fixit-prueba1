//SECCIÓN DE RESERVA "1.SELECCIONA TU DISPOSITIVO"

import React, {Component} from 'react';
import Box from './Box';
import '../pages/styles/HomeSections.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

class ReserveSection1 extends Component {  
  constructor () {
    super() 
    this.state = {
      data:[] 
    }
    
  }


  componentDidMount () {
    firebase.firestore().collection('celulares').orderBy('ref').get().then((snapShots)=>{
      this.setState({
        data: snapShots.docs.map(doc => {
          return (doc.data());
        })
      })
    })
  }
    
  handleClick(e) {
    this.props.celularEscogido(e);
  }


  render () {   
      return (
        <div>
         
         {/* inicio de título "selecciona tu dispositivo" */}
         <div className='hero-container' style={{
           backgroundColor:'white',
         }}>
             
             
             {/* <button onClick='goback()' className='regresar-herosections'>Regresar </button>
             <script>
               function goBack(params) {
                 window.history.back()
               }
             </script> */}
              <div className='herosection-1'>
                  <h2>1. selecciona tu dispositivo</h2>
              </div>
            </div>
        {/* fin de título "selecciona tu dispotivo" */}
         {/* INICIO celulares */} 
          <div style={{
            marginLeft:'1%',
            marginRight:'1%',
          }}>
          {this.state.data.map(OptionBox=>{
                return( 
                  <Link to='home/2' key={OptionBox.ref} onClick={() => this.handleClick(OptionBox.ref)}>
                  <Box descripcion={OptionBox.ref}/> 
                  </Link>
                )
          })}
         {/* FIN celulares */} 
         </div>
        </div>
      );
    }
  }

export default ReserveSection1;