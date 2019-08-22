import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import iphones2 from '../images/iphones2.png';
import '/Users/macbookair/Desktop/FIXIT/Fixit/src/pages/styles/TankYou.css';

class ThankYou extends Component {
    render () {
        return (
        <div>
            <Header/>
             {/* GRID 'FELICIDADES' */}
             <section className='hero-tnks-contact'>
                <section className='grid1-tnks-contact'>
                  <div className='item-grid1-tnks-contact'>
                    <h1>Gracias por tu pedido!</h1>
                    <h3>Lorem ipsum dolo amet</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className='item-grid1-tnks-contact'>
                    <img src={iphones2}></img>
                  </div>
                </section>
              </section>
            {/* FIN DE GRID FELICIDADES */}

            {/* SECCIÓN INFORMATIVA */}
              <section className='section1-tnks-contact'>
               <div className='instrucciones-tnks'>
                   <h2><figure></figure>Texto de apoyo<figure></figure></h2>
                   <h1>Instrucciones para tu servicio</h1>
                   <p>Texto explicativo de los pasos a seguir para un servicio</p>
                   <p>1. paso uno.Excepteur sint occaecat cupidatat non proident</p>
                   <p>2. paso dos.Excepteur sint occaecat cupidatat non proident</p>
                   <p>3. paso tres.Excepteur sint occaecat cupidatat non proident</p>
               </div>
               <div className='background-instrucciones-tnks'></div>
              </section>
              {/* FIN DE SECCIÓN EXPLICATIVA */}
            <Footer/>
        </div>
        

        );
    }
}

export default ThankYou;