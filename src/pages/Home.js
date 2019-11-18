import React, {Component} from 'react';
import logo from '../images/logofix-it.png';
import Paso1 from '../images/home-phone.svg';
import Paso2 from '../images/home-www.svg';
import Paso3 from '../images/home-truck.svg';
import Repair1 from '../images/repair1.jpg';
import Repair2 from '../images/repair2.jpg';
import Repair3 from '../images/repair3.jpeg';
import Repair4 from '../images/repair4.jpeg';
import Background1 from '../images/Rectangle3.png';
import Apple from '../images/home-apple.png';
import Check from '../images/Check.png';
import Star from '../images/Star.png';
import celular from '../images/image.png';
import ReserveSectionRoute from '../components/ReserveSectionRoute';
import './styles/HomeSections.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import firebase from 'firebase/app';
import 'firebase/storage';

class Home extends Component {
   constructor () {
      super()
      
      this.state = {
        imageEquipo: null,
        imageServicio: null,
        dataServicios:[],
        dataEquipos:[],
        NuevoEquipo:'',
        equipo:'',
        servicio:'',
        precio:'',
        bannerURL: '',
      }
         firebase.storage()
   
         firebase.storage().ref(`banners`).child("imgBanner").getDownloadURL().then( (url) => {
            this.setState({bannerURL: url});
         }
         )
    }


   
   
   
   
   
   render () {
        return (
        <React.Fragment>
           <Header/>
        {/* CONTAINER COLOR GRIS PARA LA PRIMERA SECCIÓN DE LA PÁGINA */}
           <div className='background-container' style={{
                 backgroundColor:'red',
                 width:'100% ',
                 height:'1200px',
                 backgroundColor:'#F2F2F2',
                 width:'100%',
                 margin:'0 auto',
                 WebkitClipPath:'polygon(100% 0, 0 0, 0 65%, 51% 39%, 100% 64%)',
                 clipPath:'polygon(100% 0, 0 0, 0 65%, 51% 39%, 100% 64%)',
                 marginBottom:'-500px',
                 position:'absolute',
                 zIndex:'-1',
                 }}>
           </div>
        {/*CONTAINER COLOR GRIS PARA LA PRIMERA SECCIÓN DE LA PÁGINA*/}


        {/* INICIO DE GRID DE SELECCIÓN DE PRODUCTOS */}
            <div className="ReserveSection1">
             <ReserveSectionRoute className="arreglaloYa" style={{
                 position:'absolute',
                 zIndex:'1'
                 }}/>
            </div>
        {/* FIN DE GRID DE SELECCIÓN DE PRODUCTOS */}

        {/* INICIO DE SECCIÓN "CÓMO FUNCIONA FIXIT?" */}
           
           <div className="herosection-2">
               <div className="titulo-herosection-2">
                   <h1><strong>¿CÓMO FUNCIONA</strong> FIXIT?</h1>
               </div>
               <section className="grid-herosection-2">
                   <div className="item"><h2>Agenda tu servicio de reparación a domicilio en tres sencillos pasos</h2></div>
                   <div className="item"><img src={Paso1} alt='paso 1'></img></div>
                   <div className="item"><img src={Paso2} alt='paso 2'></img></div>
                   <div className="item"><img src={Paso3} alt='paso 3'></img></div>
                   <div className="item">
                      <h2>Escoge tu equipo</h2>
                      <p>Seleccionalo en las referencias disponibles de Iphone</p>
                   </div>
                   <div className="item">
                      <h2>Reporta un daño</h2>
                      <p> Escoge entre las opciones el daño que tiene tu equipo</p>
                   </div>
                   <div className="item">
                      <h2>Agenda tu reparación</h2>
                      <p>Uno de nuestros técnicos se acercará en la fecha y hora indicada</p>
                   </div>
                </section>
             {/*FIN DE SECCIÓN "CÓMO FUNCIONA FIXIT?"*/}

             {/* INICIO BANNER PUBLICITARIO */}
            <div className='herosection-3-2' style={{
                  backgroundImage: "url("+this.state.bannerURL+")",
               }}>
               <figure className='herosection-3-2-bckgrnd'>
                  <img src={Check}></img>
                  <h1> Banner publicitario</h1>
                  <p>Texto del banner publicitario</p>
               </figure>
            </div>
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
               // position:'relative',
               // WebkitClipPath:'polygon(100% 0, 1% 0%, 0 65%, 51% 39%, 100% 64%)',
               // clipPath:'polygon(100% 0, 1% 0%, 0 65%, 51% 39%, 100% 64%)',
               filter: 'brightness(0.5)',
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