import React, {Component} from 'react';
import './styles/Soporte.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Backgroundsoporte1 from '../images/soporteimg1.jpg';
import Backgroundsoporte2 from '../images/soporteimg2.jpeg';
import Backgroundsoporte3 from '../images/soporteimg3.jpg';

class Soporte extends Component {
    render () {
        return (
        <React.Fragment>
        <Header/>

{/* INICIO DE ACORDOEÓN DE PREGUNTAS FRECUENTES */}
        <div className="acordeon-container">
            <h1 className="titulo-acordeon">Preguntas Frecuentes </h1>
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
                <p className="acordeon-contenido">Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
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
{/* FIN DE ACORDEÓN DE PREGUNTAS FRECUENTES   */}

{/* INICIO DE SECCIÓN NECESITAS AYUDA? */}
                <form method="POST"action="https://us-central1-fixit-88405.cloudfunctions.net/mailContacto/v1" className="formulario-soporte">
                  <h3>¿Necesitas ayuda?</h3>
                  <p>Nos pondremos en </p>
                  <p>contacto contigo</p>
                <div className='form-container'>
                    <label for='nombre'>Nombre y apellido</label>
                    <label for='correo'>Correo electrónico</label>
                    <label for='numero'>Número de contacto</label>
                  <div className='campos-formulario-soporte'>
                    <input id='nombre' name='nombre' type="text" className="e-mail"></input>
                    <input id='correo' name='correo' type="text" className="e-mail"></input>
                    <input id='numero' name='numero' type="phone" className="e-mail"></input>
                    <input id='tipo' name='tipo' type="hidden" value="Soporte"></input>
                  </div>
                 <button type='submit' className="boton-formulario" action=''>Enviar</button>
                 </div>
                </form>
 {/* FIN DE SECCIÓN NECESITAS AYUDA?*/}

 {/* INICIO SECCIÓN "UN SERVICIO AMIGABLE Y DE CALIDAD" */}
            </div> 
            <div className="seccion-informacion-soporte">
              <section className="grid1-soporte">
                <div className="item-grid1-soporte" style={{
                     backgroundImage: "url(" + Backgroundsoporte1 + ")",
                     backgroundSize: 'cover',
                     backgroundPositionX:'center',
                     backgroundPositionY:'center',
                     // filter: 'brightness(0.5)',
                     KhtmlOpacity:'0.5',
                     MozOpacity:'0.5',
                     msFilter:'alpha(opacity=50)',
                     filter:'alpha(opacity=50)',
                     filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=0.5)',
                     // opacity:'0.7',
                  }}>
                </div>
                <div className="item-grid1-soporte">
                 <h2 className="soporte-subtitulo-2">Un servicio amigable y de calidad!</h2>
                </div>
                <div className="item-grid1-soporte" style={{
                     backgroundImage: "url(" + Backgroundsoporte2 + ")",
                     backgroundSize: 'cover',
                     // filter: 'brightness(0.5)',
                     KhtmlOpacity:'0.5',
                     MozOpacity:'0.5',
                     msFilter:'alpha(opacity=50)',
                     filter:'alpha(opacity=50)',
                     filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=0.5)',
                     // opacity:'0.7',
                  }}>
                </div>
                <div className="item-grid1-soporte">
                  <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean</p>
                </div>
                <div className="item-grid1-soporte" style={{
                     backgroundImage: "url(" + Backgroundsoporte3 + ")",
                     backgroundSize: 'cover',
                     backgroundPositionY:'center',
                     backgroundPositionX:'center',
                    //  backgroundPositionX:'left',
                     // filter: 'brightness(0.5)',
                     KhtmlOpacity:'0.5',
                     MozOpacity:'0.5',
                     msFilter:'alpha(opacity=50)',
                     filter:'alpha(opacity=50)',
                     filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=0.5)',
                     // opacity:'0.7',
                  }}>
                </div>
                <div className="item-grid1-soporte">
                 <a href='https://api.whatsapp.com/send?phone=573219363482&text=Te contacto desde la web de fixit y necesito:' target="_blank"><button type="submit" className='wp-button'>Whatsapp</button></a>
                </div>
              </section>
            </div>
 {/* FIN DE SECCIÓN "UN SERVICIO AMIGABLE Y DE CALIDAD"*/}
        </div>
        <Footer/>
        </React.Fragment>

        );
    }
}

export default Soporte;