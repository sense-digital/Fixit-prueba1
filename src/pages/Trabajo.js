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
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                   <p>sed do eiusmod tempor incididunt ut labore et dolore</p>
                 </div>
                 <div className='item4'></div>
                 <div className='item4'>
                   <button type='button' className='button-trabajo'>Contáctanos</button>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  </div>
                  <div className='item5'><img src={grid2img1} alt=''></img></div>
                  <div className='item5'><img src={grid2img2} alt=''></img></div>
                  <div className='item5'><img src={grid2img3} alt=''></img></div>
                  <div className='item5'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                  <div className='item5'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                  <div className='item5'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
              </section>


            </div>
        {/* FIN GRID SEGUNDA SECCIÓN "CÓMO FUNCIONA"*/}


        {/* INICIO TERECERA SECCIÓN "CONTÁCATANOS"*/}
        <div style={{
               borderTop:'1px solid black'
            }}></div>


             <div className='section-container'>
               <div className='section3-title'>
                 <figure className='section3-figure1'></figure>
                 <h2>CONTÁCTANOS</h2>
                 <figure className='section3-figure2'></figure>
               </div>



               <div className='section3-form'>

                 <form action='' className='formulario-trabaja'>
                   <div className='form2-container'>
                    <div className='item6' ><label for='nya2'>Nombre y apellido</label></div>
                    <div className='item6'><input id='nya2' type="text"></input></div>
                    <div className='item6' ><label for='email2'>Correo electrónico</label></div>
                    <div className='item6'><input id='email2' type="text"></input></div>
                    <div className='item6' ><label for='phone2'>Número de contacto</label></div>
                    <div className='item6'><input id='phone2' type="phone"></input></div>
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