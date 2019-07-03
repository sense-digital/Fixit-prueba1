import React, {Component} from 'react';
import Box from './Box';
import { Link, NavLink } from 'react-router-dom';
import '../pages/styles/HomeSections.css';
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
    firebase.firestore().collection('celulares').get().then((snapShots)=>{
      this.setState({
        data: snapShots.docs.map(doc => {
          return (doc.data());
        })
      })
    })
  }
    


  render () {   
      return (
        <div>
         
         {/* inicio de título "selecciona tu dispositivo" */}
         <div className='hero-container'>
              <div className='herosectiont-1'>
                  <h2>1. selecciona tu dispositivo</h2>
              </div>
            </div>
        {/* fin de título "selecciona tu dispotivo" */}
         
         {/* INICIO celulares */} 
         <ul>
          {this.state.data.map(OptionBox=>{
                return( 
                  <Box key={OptionBox.ref} descripcion={OptionBox.ref}/> 
                )
          })}
         </ul>
         {/* FIN celulares */} 

        </div>
      );
    }
  }

export default ReserveSection1;