//SECCIÓN DE SLIDER PROMOCIONAL DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import './styles/SliderPromocional.css';


class SliderPromocional extends Component {
    render () {
        return (    
        <div className='banner-admin-container'>
        <div className='banner-admin-item'>
            <label>
            Slider promocional 1
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" />
            </label>
        </div>

        <div className='banner-admin-item'>
            <label>
            Slider promocional 2
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" />
            </label>
        </div>

        <div className='banner-admin-item'>
            <label>
            Slider promocional 3
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" />
            </label>
        </div>
            <br/>
            <br/>
            <br/>

        <div className='banner-admin-button'><button>Guardar cambios</button></div>

        </div>
        );
    }
}

export default SliderPromocional;