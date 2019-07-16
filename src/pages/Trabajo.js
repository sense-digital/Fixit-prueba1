import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import grid1img from '../images/image2.png';
import grid2img1 from '../images/trabaja1.png';
import grid2img2 from '../images/trabaja2.png';
import grid2img3 from '../images/trabaja3.png';
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
                 <div className='item1'><h1>Trabaja con nosotros!</h1></div>
                 <div className='item1'>
                   <img className='grid1-img' alt='grid1-img' src={grid1img}></img>
                 </div>
                 <div className='item1'>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                   <p>sed do eiusmod tempor incididunt ut labore et dolore</p>
                 </div>
                 <div className='item1'></div>
                 <div className='item1'>
                   <button type='button' className='button-trabajo'>Contáctanos</button>
                 </div>
                 <div className='item1'></div>
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
                  <div className='item2'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  </div>
                  <div className='item2'><img src={grid2img1} alt=''></img></div>
                  <div className='item2'><img src={grid2img2} alt=''></img></div>
                  <div className='item2'><img src={grid2img3} alt=''></img></div>
                  <div className='item2'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                  <div className='item2'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
                  <div className='item2'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
              </section>


            </div>




        {/* FIN GRID SEGUNDA SECCIÓN "CÓMO FUNCIONA"*/}


            {/* <Footer/> */}
        </div>
        

        );
    }
}

export default Trabajo;