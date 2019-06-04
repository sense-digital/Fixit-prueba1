//CAJAS PARA SELECCIONAR LOS SERVICIOS POR EL CLIENTE

import React from 'react';

import './styles/OptionBox.css';
import ProductImage from '../images/iphonexs.png';

class OptionBox extends React.Component {
    render () {
        
      return (<div className="OptionBox">
                <div className="TopOptionBox">
                    <img src={ProductImage} alt="Foto de producto"/>
                </div>
                <div className="DwonOptionBox">
                    <h2>
                      {this.props.producto}
                    </h2>
                </div>
            </div> 
            );  
    }

}

export default OptionBox;