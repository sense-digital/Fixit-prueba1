//SECCIÓN DE RESERVA "3. Datos y agendamiento"

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/HomeSections.css';

class ReserveSection3 extends Component {  
  state = {};

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })  
  }
 
  handleClick = (e) => {
    console.log('Se hizo click perras');
    console.log(this.state);
  }
 
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
              <input type="text" name="nombre" onChange={this.handleChange} value={this.state.nombre}/>
            </label>

            <label>
                Apellido:
                <input type="text" name="apellido" onChange={this.handleChange} value={this.state.apellido}/>
            </label>

          <br/>

          <label>
                Dirección:
                <input type="text" name="direccion" onChange={this.handleChange} value={this.state.direccion}/>
          </label>


          <label>
                Detalle dirección:
                <input type="text" name="detalleDireccion" onChange={this.handleChange} value={this.state.detalleDireccion}/>
          </label>

          <br/>

         <label>   
                Fecha de recogida:
                <input type="date" name="fechaDeRecogida" onChange={this.handleChange} value={this.state.fechaDeRecogida}/>
          </label>    

          <label>
                Hora:
                <input type="time" name="hora" onChange={this.handleChange} value={this.state.hora}/>
          </label>

          <br/>

          <label>
                Correo electrónico:
                <input type="email" name="correo" onChange={this.handleChange} value={this.state.correo}/>
          </label>

          <label>
                Celular:
                <input type="tel" name="celular" onChange={this.handleChange} value={this.state.celular}/>
          </label>

          <button type='button' onClick={this.handleClick}> <Link to='/home/4'> Siguiente </Link> </button>

          </form>
        {/* FIN formulario para compra */}

        </div>
      );
    }
  }

export default ReserveSection3;