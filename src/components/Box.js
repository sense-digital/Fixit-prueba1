//CAJA EN LA QUE SE COLOCAN LOS CELULARES Y SERVICIOS

import React, {Component} from 'react';

import './styles/Box.css';
import ProductImage from '../images/iphonexs.png';

class Box extends Component {  

  estilos = this.props.item

  render () {
        return (

            <div className="OptionBox"  >
            <div className='OptionBox-Container' >
              <div className="OptionBox-Item" >
                  <img src={ProductImage} alt="Foto de producto"/>
              </div>
              <div className="OptionBox-Item">
                <h2>{this.props.descripcion}</h2>
              </div>
            </div>
            </div> 
        );  
    }
}

export default Box;