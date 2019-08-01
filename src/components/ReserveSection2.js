//SECCIÓN DE RESERVA "2. ¿Que necesitas arreglar?"

import React, {Component} from 'react';
import Box from './Box';
import { Link } from 'react-router-dom';
import '../pages/styles/HomeSections.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import '../components/styles/reservesection2.css';

class ReserveSection2 extends Component {  
  constructor () {
    super() 
    this.state = {
      data:[] 
    }
  }

  componentDidMount () {
    firebase.firestore().collection('servicios').where("equipo", '==',this.props.celularEscogido).get().then((snapShots)=>{
      this.setState({
        data: snapShots.docs.map(doc => {
          return (doc.data());
        })
      })
    })    
  }

  handleClick(e,p) {
    this.props.servicioEscogido(e,p);
  }

  botonDeSiguiente = ()=> {
    if (this.props.precioEscogido)
    return <button><Link to='/home/3'>Siguiente</Link></button>
    else 
    return <h4>Escoge un servicio para continuar</h4>
  }

  render () {   
      return (
        <div>

{/* INICIO de título  */}
         <div className='hero-container' style={{
           backgroundColor:'white',
         }}>  
              <Link to='/home' className='previous'>&#8249;</Link>{/*&#8701*/}
              <div className='herosection-1'>
                  <h2>2. ¿Que necesitas arreglar?</h2>
              </div>
            </div>
{/* FIN de título */}

{/* INICIO servicios para mantenimiento  */} 
          {this.state.data.map(OptionBox => {
                return(
              <span key={OptionBox.servicio} onClick={() => this.handleClick(OptionBox.servicio,OptionBox.precio)}>
              <Box  descripcion={OptionBox.servicio}/>
              </span>
              )})}
            <div className='reservesection2-info-container'> 
            <div className='reservesection2-tittle-container'>
            <div className='reservesection2-title'>
              <h2>Costo de reparación </h2>
              <h5>{ new Intl.NumberFormat("de-DE", {style: "currency", currency: "COP", minimumFractionDigits: 0}).format(this.props.precioEscogido)} </h5>
            </div> 
            {this.botonDeSiguiente()}
            </div>
              
            </div>
{/* FIN servicios para mantenimiento  */} 


        </div>
      );
    }
  }

export default ReserveSection2;