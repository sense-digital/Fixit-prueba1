import React, {Component} from 'react';

import './styles/Box.css';
import ProductImage from '../images/iphonexs.png';

class Box extends Component {  
    render () {
        return (
            <div className="OptionBox">
            <div className="TopOptionBox">
                <img src={ProductImage} alt="Foto de producto"/>
            </div>
            <div className="DwonOptionBox">
                <h2>
                  {this.props.descripcion}
                </h2>
             </div>
            </div> 
        );  
    }
}

export default Box;