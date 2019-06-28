import React, {Component} from 'react';

import ReserveSectionRoute from '../components/ReserveSectionRoute';
import './styles/HomeSections.css';

class Home extends Component {
    render () {
        return (
        <React.Fragment>
           
        {/* inicio de título "selecciona tu dispositivo" */}
            <div class='hero-container'>
              <div class='herosectiont-1'>
                  <h2>1. selecciona tu dispositivo</h2>
              </div>
            </div>
        {/* fin de título "selecciona tu dispotivo" */}

        {/* INICIO DE GRID DE SELECCIÓN DE PRODUCTOS */}
            <div class="ReserveSection1">
            <ReserveSectionRoute/>
            </div>
        {/* FIN DE GRID DE SELECCIÓN DE PRODUCTOS */}

        {/* INICIO DE SECCIÓN "CÓMO FUNCIONA FIXIT?" */}
           <div class="herosection-2">
               <div class="titulo-herosection-2">
                   <h1>¿Como funciona?</h1>
                   <image src="/Users/macbookair/Desktop/FIXIT/Fixit/src/images/logofix-it.png" alt="logo fixit" width="500px"></image>
               </div>
               <section class="grid-herosection-2">
                   <div class="item"><h2>Texto de poyo al título</h2></div>
                   <div class="item"><img src=""></img></div>
                   <div class="item"><img src=""></img></div>
                   <div class="item"><img src=""></img></div>
                   <div class="item">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                   </div>
                   <div class="item">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                   </div>
                   <div class="item">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                   </div>
                </section>
             {/*FIN DE SECCIÓN "CÓMO FUNCIONA FIXIT?"*/}

             {/* INICIO BANNER PUBLICITARIO */}
            <div class="herosection-3">
                <h1>BANNER PUBLICITARIO</h1> 
           </div> 
           {/* FIN BANNER PUBLICITARIO */}

           {/* INICIO GRID DE POR QUÉ FIXIT */}
            <section class="herosection-4">
                <div class="item2"><h1>¿Por qué FixIt? </h1></div>
                <div class="item2">img 1</div>
                <div class="item2">img 2</div>
                <div class="item2">img 3</div>
                <div class="item2">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                </div>
                <div class="item2">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                </div>
                <div class="item2">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                </div>
            </section>
            {/* FIN GRID DE POR QUÉ FIXIT */}

            {/* INICIO GRID DE CIFRAS */}
            <section class="herosection-5">
               <div class="item3">
                  <h2>Dato</h2>
                  <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
               </div>
               <div class="item3">
                  <h2>Dato</h2>
                  <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
               </div>
               <div class="item3">
                  <h2>Dato</h2>
                  <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
               </div>
               <div class="item3">image 1</div>
            </section>
            {/* FIN GRID DE CIFRAS */}
           </div>

            {/* <div className="Section HeroHome">
                <h1>¿Condiciones? </h1>
            </div>
            <div className="Section">
            <h1>Datos numéricos</h1>    
            </div> */}
        </React.Fragment>
        );
    }
}

export default Home;