//ENRUTADOR DE LA SECCIÓN DE RESERVAS


import React, { Component } from 'react';
import ReserveSection1 from './ReserveSection1';
import ReserveSection2 from './ReserveSection2';
import ReserveSection3 from './ReserveSection3';
import ReserveSection4 from './ReserveSection4';
import {Route} from 'react-router-dom';

class ReserveSectionRoute extends Component{
    constructor () {
        super() 
        this.state = {
          celular:'',
          servicio:'',
          precio:'',
          nombre:'',
          apellido:'',
          direccion: '',
          detalleDireccion: '',
          fechaDeRecogida:'',
          hora: '',
          mail: '',
          equipo: '',
        }
      }

    celularEscogido (e) {
        this.setState({equipo:e});
    }  
    
    servicioEscogido (e,p) {
        this.setState({servicio:e})
        this.setState({precio:p})
    }

    formularioDeContacto = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })  
    }

    render(){
        return (
    <div>
        <Route  exact path="/home" render={()=> <ReserveSection1 celularEscogido={(e)=>this.celularEscogido(e)} />} />
        <Route  path="/home/2" render={()=> <ReserveSection2 celularEscogido={this.state.equipo} servicioEscogido={(e,p)=>this.servicioEscogido(e,p)} estado={this.state} />} />
        <Route  path="/home/3" render={()=> <ReserveSection3 precioEscogido={this.state.precio} formularioDeContacto={(e)=>this.formularioDeContacto(e)} estado={this.state}/>} />
        <Route  path="/home/4" render={()=> <ReserveSection4 estado={this.state} />} />
    </div>               
        )
}}

export default ReserveSectionRoute;