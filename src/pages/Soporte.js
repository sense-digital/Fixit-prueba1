import React, {Component} from 'react';
import './styles/Soporte.css';


class Soporte extends Component {
    render () {
        return (
        <div className="acordeon-container">
            <h1 className="titulo-acordeon">Preguntas </h1>
            <div className="acordeon">
              <div className="acordeon-item">
                <input type="radio" name="acordeon" id="item1"></input>
                <label for="item1" className="acordeon-titulo">Título 1</label>
                <p className="acordeon-contenido">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="acordeon">
              <div className="acordeon-item">
                <input type="radio" name="acordeon" id="item2"></input>
                <label for="item2" className="acordeon-titulo">Título 2</label>
                <p className="acordeon-contenido">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="acordeon">
              <div className="acordeon-item">
                <input type="radio" name="acordeon" id="item3"></input>
                <label for="item3" className="acordeon-titulo">Título 3</label>
                <p className="acordeon-contenido">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="acordeon">
              <div className="acordeon-item">
                <input type="radio" name="acordeon" id="item4"></input>
                <label for="item4" className="acordeon-titulo">Título 4</label>
                <p className="acordeon-contenido">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div>
                <form action="" className="formulario-soporte">
                 <h3>Necesitas ayuda?</h3>
                 <p>Nos pondremos en contacto contigo</p>
                 <input type="text" placeholder="Nombre y apellido" className="e-mail"></input>
                 <input type="text" placeholder="Correo electrónico" className="e-mail"></input>
                 <input type="phone" placeholder="Número de contacto" className="e-mail"></input>
                 <button className="boton-formulario">Enviar</button>
                </form>
            </div> 
            <div className="seccion-informacion-soporte">
              <section className="grid1-soporte">
                <div className="item-grid1-soporte">
                  <figure className="soporte-imagewrapper"> 
                    <img className="soporte-image1" src="" alt="imagen1"></img>
                  </figure>
                </div>
                <div className="item-grid1-soporte">
                 <h2 className="soporte-subtitulo-2">Un servicio amigable y de calidad!</h2>
                </div>
                <div className="item-grid1-soporte">
                  <figure className="soporte-imagewrapper"> 
                    <img className="soporte-image1" src="" alt="imagen1"></img>
                  </figure>
                </div>
                <div className="item-grid1-soporte">
                  <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean</p>
                </div>
                <div className="item-grid1-soporte">
                  <figure className="soporte-imagewrapper"> 
                    <img className="soporte-image1" src="" alt="imagen1"></img>
                  </figure>
                </div>
                <div className="item-grid1-soporte">
                 <button type="submit">Whatsapp</button>
                </div>
              </section>
            </div>
        </div>
        

        );
    }
}

export default Soporte;