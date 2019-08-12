//SECCIÓN DE SLIDER PROMOCIONAL DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';


class SliderPromocional extends Component {
    render () {
        return (
        <div>
            <label>
            Slider promocional 1<br/>
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" />
            </label>
            <br/>
            <label>
            Slider promocional 2<br/>
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" />
            </label>
            <br/>
            <label>
            Slider promocional 3<br/>
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" />
            </label>

            <br/>
            <br/>
            <br/>

            <button>Guardar cambios</button>

        </div>
        );
    }
}

export default SliderPromocional;