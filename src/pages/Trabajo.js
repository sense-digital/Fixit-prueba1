import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import grid1img from '../images/image2.png';
import grid2img1 from '../images/trabaja1.png';
import grid2img2 from '../images/trabaja2.png';
import grid2img3 from '../images/trabaja3.png';
import trabajaform from '../images/trabaja4.png';
import './styles/Trabajo.css';
class Trabajo extends Component {


    render () {
        return (
        <div>
            <Header/>
        {/* CONTAINER COLOR azul PARA LA PRIMERA SECCIÓN DE LA PÁGINA */}
           <div className='background-container' style={{
                 width:'100% ',
                 height:'1200px',
                 backgroundColor:'#3A8BBB',
                 width:'100%',
                 margin:'0 auto',
                 WebkitClipPath:'polygon(0 25%, 100% 6%, 100% 0%, 0% 0%)',
                 clipPath:'polygon(0 25%, 100% 6%, 100% 0%, 0% 0%)',
                 marginBottom:'-500px',
                 position:'absolute',
                 zIndex:'-1',
                 }}>
           </div>
        {/*CONTAINER COLOR AZUL PARA LA PRIMERA SECCIÓN DE LA PÁGINA*/}

        {/* INICIOS GRID DE PRIMERA SECCIÓN 'TRABAJA CON NOSOTROS' */}
            <div className='section-container'>
               <section className='section1'>
                 <div className='item4'><h1>Trabaja con nosotros!</h1></div>
                 <div className='item4'>
                   <img className='grid1-img' alt='grid1-img' src={grid1img}></img>
                 </div>
                 <div className='item4'>
                   <p>Se parte de nuestro equipo</p>
                   <p>y amplía tus posibilidades de generar ingresos</p>
                 </div>
                 <div className='item4'></div>
                 <div className='item4'>
                 <p className="btn-cont">
                   <a className="btn-trabajo" href="http://localhost:3000/trabajo/#section3-form">Contáctanos</a>
                 </p> 
                 </div>
                 <div className='item4'></div>
               </section> 
            </div>

        {/* FIN GRID DE PRIMERA SECCIÓN 'TRABAJA CON NOSOTROS' */}
            
        {/* INICIO GRID SEGUNDA SECCIÓN "CÓMO FUNCIONA"*/}
      
            <div className='section-container'>
              <div className='section2-tittle'>
                  <h2>Cómo funciona?</h2>
                  <figure></figure>
              </div>
              <section className='section2'>
                  <div className='item5'>
                    <p>Es muy fácil! Sigue los siguientes pasos y en poco tiempo podrás empezar a trabajar nosotros</p>
                  </div>
                  <div className='item5'><img src={grid2img1} alt=''></img></div>
                  <div className='item5'><img src={grid2img2} alt=''></img></div>
                  <div className='item5'><img src={grid2img3} alt=''></img></div>
                  <div className='item5'><p>Envíanos tus datos; nos pondremos en contacto contigo</p></div>
                  <div className='item5'><p>Agendaremos una cita y realizaremos una pequeña prueba técnica</p></div>
                  <div className='item5'><p>Serás vinculado a nuestra empresa en muy poco tiempo!</p></div>
              </section>


            </div>
        {/* FIN GRID SEGUNDA SECCIÓN "CÓMO FUNCIONA"*/}


        {/* INICIO TERECERA SECCIÓN "CONTÁCATANOS"*/}
        <div style={{
               borderTop:'1px solid black'
            }}></div>


             <div className='section-container'>
               <div className='section3-title' id='section3-title'>
                 <figure className='section3-figure1'></figure>
                 <h2>CONTÁCTANOS</h2>
                 <figure className='section3-figure2'></figure>
               </div>



               <div className='section3-form' id="section3-form">

                 <form method="POST"action="https://us-central1-fixit-88405.cloudfunctions.net/mailContacto/v1"className='formulario-trabaja'>
                   <div className='form2-container'>
                    <div className='item6' ><label for='nombre'>Nombre y apellido</label></div>
                    <div className='item6'><input  id='nombre' name='nombre' type="text"></input></div>
                    <div className='item6' ><label for='correo'>Correo electrónico</label></div>
                    <div className='item6'><input id='correo' name='correo' type="text"></input></div>
                    <div className='item6' ><label for='numero'>Teléfono</label></div>
                    <div className='item6'><input id='numero' name='numero' type="phone"></input></div>
                    <input id='tipo' name='tipo' type="hidden" value="Trabaja con fixit"></input>
                     {/* <div className='campos-formulario-trabaja'>
                     </div> */}
                    <div className='item6'><button type='submit'className='boton-formulario-trabaja' >Enviar</button></div>
                   </div> 
                 </form> 

                 <img src={trabajaform} alt='trabaja con nosotros' className='trabajaimg4'></img>               
                 
               </div>   

             </div>   
        {/* FIN TERECERA SECCIÓN "CONTÁCATANOS"*/}


            <Footer/>
        </div>
        

        );
    }
}

export default Trabajo;