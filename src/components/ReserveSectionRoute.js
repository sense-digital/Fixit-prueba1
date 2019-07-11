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
        }
      }

    handleClick (e) {
        this.setState({celular:e});
    }   

    render(){
        return (
    <div>
        <Route  exact path="/home" render={()=> <ReserveSection1 celularEscogido={(e)=>this.handleClick(e)} />} />
        <Route  path="/home/2" render={()=> <ReserveSection2 celularEscogido={this.state.celular} />} />
        <Route  path="/home/3" component={ReserveSection3} />
        <Route  path="/home/4" component={ReserveSection4}  />
    </div>               
        )
}}

export default ReserveSectionRoute;