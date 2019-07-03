import React, {Component} from 'react';
import Box from './Box';
import '../pages/styles/HomeSections.css';

class ReserveSection3 extends Component {  
  render () {   
      return (
        <div>

        {/* INICIO de título  */}
         <div className='hero-container'>
              <div className='herosectiont-1'>
                  <h2>3. Datos y agendamiento</h2>
              </div>
            </div>
        {/* FIN de título */}



         {/* INICIO formulario para compra */}
          <form>

            <label>
              Nombre:
              <input type="text" name="nombre"/>
            </label>

            <label>
                Apellido:
                <input type="text" name="apellido"/>
            </label>

          <br/>

          <label>
                Dirección:
                <input type="text" name="direccion"/>
          </label>


          <label>
                Detalle dirección:
                <input type="text" name="detalle-direccion"/>
          </label>

          <br/>

         <label>   
                Fecha de recogida:
                <input type="text" name="fecha-de-recogida"/>
          </label>  

          <label>
                Hora:
                <input type="text" name="hora"/>
          </label>

          <br/>

          <label>
                Correo electrónico:
                <input type="text" name="correo"/>
          </label>

          <label>
                Celular:
                <input type="text" name="celular"/>
          </label>

          </form>
        {/* FIN formulario para compra */}

        </div>
      );
    }
  }

export default ReserveSection3;