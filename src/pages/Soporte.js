import React, {Component} from 'react';
import './styles/Soporte.css';


class Soporte extends Component {
    render () {
        return (
        <div class="acordeon-container">
            <h1 class="titulo-acordeon">Preguntas </h1>
            <div class="acordeon">
              <div class="acordeon-item">
                <input type="radio" name="acordeon" id="item1"></input>
                <label for="item1" class="acordeon-titulo">Título 1</label>
                <p class="acordeon-contenido">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div class="acordeon">
              <div class="acordeon-item">
                <input type="radio" name="acordeon" id="item2"></input>
                <label for="item2" class="acordeon-titulo">Título 2</label>
                <p class="acordeon-contenido">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div class="acordeon">
              <div class="acordeon-item">
                <input type="radio" name="acordeon" id="item3"></input>
                <label for="item3" class="acordeon-titulo">Título 3</label>
                <p class="acordeon-contenido">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div class="acordeon">
              <div class="acordeon-item">
                <input type="radio" name="acordeon" id="item4"></input>
                <label for="item4" class="acordeon-titulo">Título 4</label>
                <p class="acordeon-contenido">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div>
                <form action="" class="formulario-soporte">
                 <h3>Necesitas ayuda?</h3>
                 <p>Nos pondremos en contacto contigo</p>
                 <input type="text" placeholder="Nombre y apellido" class="e-mail"></input>
                 <input type="text" placeholder="Correo electrónico" class="e-mail"></input>
                 <input type="phone" placeholder="Número de contacto" class="e-mail"></input>
                 <button class="boton-formulario">Enviar</button>
                </form>
            </div> 
        </div>
        

        );
    }
}

export default Soporte;