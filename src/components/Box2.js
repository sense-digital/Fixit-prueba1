//CAJA EN LA QUE SE COLOCAN LOS CELULARES Y SERVICIOS

import React, {Component} from 'react';

import './styles/Box.css';


class Box extends Component {  

  estilos = this.props.item

  render () {
        return (

            <div className="OptionBox"  >
            <div className='OptionBox-Container' >
              <div className="OptionBox-Item">
                <h2>{this.props.descripcion}</h2>
              </div>
            </div>
            </div> 
        );  
    }
}

export default Box;