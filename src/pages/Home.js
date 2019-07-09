import React, {Component} from 'react';
import logo from '../images/logofix-it.png';
import ReserveSectionRoute from '../components/ReserveSectionRoute';
import './styles/HomeSections.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
    render () {
        return (
        <React.Fragment>
           <Header/>
        {/* INICIO DE GRID DE SELECCIÓN DE PRODUCTOS */}
            <div className="ReserveSection1">
            <ReserveSectionRoute id="arreglaloYa"/>
            </div>
        {/* FIN DE GRID DE SELECCIÓN DE PRODUCTOS */}

        {/* INICIO DE SECCIÓN "CÓMO FUNCIONA FIXIT?" */}
           <div className="herosection-2">
               <div className="titulo-herosection-2">
                   <h1>¿Como funciona?</h1>
                   <img src={logo} alt="logo fixit" width="100px"></img>
               </div>
               <section className="grid-herosection-2">
                   <div className="item"><h2>Texto de poyo al título</h2></div>
                   <div className="item"><img src=""></img></div>
                   <div className="item"><img src=""></img></div>
                   <div className="item"><img src=""></img></div>
                   <div className="item">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                   </div>
                   <div className="item">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                   </div>
                   <div className="item">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                   </div>
                </section>
             {/*FIN DE SECCIÓN "CÓMO FUNCIONA FIXIT?"*/}

             {/* INICIO BANNER PUBLICITARIO */}
            <div className="herosection-3">
                <h1>BANNER PUBLICITARIO</h1> 
           </div> 
           {/* FIN BANNER PUBLICITARIO */}

           {/* INICIO GRID DE POR QUÉ FIXIT */}
            <section className="herosection-4">
                <div className="item2"><h1>¿Por qué FixIt? </h1></div>
                <div className="item2">img 1</div>
                <div className="item2">img 2</div>
                <div className="item2">img 3</div>
                <div className="item2">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                </div>
                <div className="item2">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                </div>
                <div className="item2">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                </div>
            </section>
            {/* FIN GRID DE POR QUÉ FIXIT */}

            {/* INICIO GRID DE CIFRAS */}
            <section className="herosection-5">
               <div className="item3">
                  <h2>Dato</h2>
                  <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
               </div>
               <div className="item3">
                  <h2>Dato</h2>
                  <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
               </div>
               <div className="item3">
                  <h2>Dato</h2>
                  <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
               </div>
               <div className="item3">image 1</div>
            </section>
            {/* FIN GRID DE CIFRAS */}
            <Footer/>
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