import React, {Component} from 'react';
import logo from '../images/logofix-it.png';
import Paso1 from '../images/home-phone.svg';
import Paso2 from '../images/home-www.svg';
import Paso3 from '../images/home-truck.svg';
import Repair1 from '../images/repair1.jpg';
import Repair2 from '../images/repair2.jpg';
import Repair3 from '../images/repair3.jpeg';
import Repair4 from '../images/repair4.jpeg';
import Background1 from '../images/background1.jpg';
import Apple from '../images/home-apple.png';
import Check from '../images/Check.png';
import Star from '../images/Star.png';
import celular from '../images/iphonexs1.png';
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
                   <div className="item"><img src={Paso1} alt='paso 1'></img></div>
                   <div className="item"><img src={Paso2} alt='paso 2'></img></div>
                   <div className="item"><img src={Paso3} alt='paso 3'></img></div>
                   <div className="item">
                      <h2>Descripción 1</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                   </div>
                   <div className="item">
                      <h2>Descripción 2</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                   </div>
                   <div className="item">
                      <h2>Descripción 3</h2>
                      <p>Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean. Aliquet eget sit. Id diam maecenas ultricies mi Rhoncus aenean </p>
                   </div>
                </section>
             {/*FIN DE SECCIÓN "CÓMO FUNCIONA FIXIT?"*/}

             {/* INICIO BANNER PUBLICITARIO */}
      
            <div className="herosection-3">
                {/* <h1>BANNER PUBLICITARIO</h1>  */}
                <div className='banner-publicitario1'>
                   <ul>
                      <li><img className='banner-img' src={Repair1} alt='Reparación de celular 1'></img></li>
                      <li><img className='banner-img' src={Repair2} alt='Reparación de celular 2'></img></li>
                      <li><img className='banner-img' src={Repair3} alt='Reparación de celular 3'></img></li>
                      <li><img className='banner-img' src={Repair4} alt='Reparación de celular 4'></img></li>
                   </ul>
                </div>  
           </div> 
         
           {/* FIN BANNER PUBLICITARIO */}

           {/* INICIO GRID DE POR QUÉ FIXIT */}
            <section className="herosection-4" style={{
               backgroundImage: "url(" + Background1 + ")",
               // backgroundRepeat: 'no-repeat',
               // backgroundPosition: 'center',
               backgroundSize: 'cover',
               // filter: 'brightness(0.5)',
               KhtmlOpacity:'0.5',
               MozOpacity:'0.5',
               msFilter:'alpha(opacity=50)',
               filter:'alpha(opacity=50)',
               filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=0.5)',
               // opacity:'0.7',
            }}>
                <div className="item2"><h1>¿ Por qué FixIt ? </h1></div>
                <div className="item2"><img className='porqueimg' src={Star} alt=''></img></div>
                <div className="item2"><img className='porqueimg' src={Apple} alt=''></img></div>
                <div className="item2"><img className='porqueimg' src={Check} alt=''></img></div>
                <div className="item2">
                      <h2>PROFESIONALES</h2>
                      <p>Todo nuestros ténicos son expertos certificados en reparación de equipos.</p>
                </div>
                <div className="item2">
                      <h2>ESPECIALIZADOS</h2>
                      <p>Estamos 100% especializados en equipos marca APPLE con el fin de dar el mejor servicio.</p>
                </div>
                <div className="item2">
                      <h2>LA MEJOR GARANTÍA</h2>
                      <p>AliqueTenemos la mejor garantía: Vamos a su ubicación y arreglamos el problema.</p>
                </div>
            </section>
            {/* FIN GRID DE POR QUÉ FIXIT */}

            {/* INICIO GRID DE CIFRAS */}
            <section className="herosection-5">
               <div className="item3">
                  <h2>1.300</h2>
                  <h3>Descripción 1</h3>
                  <p>Aliquet eget sit. </p>
               </div>
               <div className="item3">
                  <h2>5.400</h2>
                  <h3>Descripción 2</h3>
                  <p>Aliquet eget sit. </p>
               </div>
               <div className="item3">
                  <h2>2.800</h2>
                  <h3>Descripción 3</h3>
                  <p>Aliquet eget sit. </p>
               </div>
               <div className="item3"><img className='celular1' src={celular}></img></div>
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