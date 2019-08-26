import React, {Component} from 'react';
import logofixit from '../images/logofix-it.png';
import './styles/Footer.css';

class Footer extends Component {
    render () {
        return (
<div className="footer">
    <div className='first-footer'>
        <div className='info-containter-footer'>  
           <div className='itemfooter'>
             <input type='radio' name='deplegable-footer' id='desplegablefooter' className='footer-desplegable-menu'></input>
             <label htmlFor='desplegablefooter'>Acerca de nosotros</label>
             <p className='footercontenido'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget libero tincidunt, fringilla enim vel, tristique nisl. Lorem ipsum dolor sit amet.</p>
           </div>
           <div className='itemfooter'>
           <input type='radio' name='deplegable-footer2' id='desplegablefooter2' className='footer-desplegable-menu'></input>
             <label htmlFor='desplegablefooter2'>Trabaja con nosotros</label>
             <p className='footercontenido'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget libero tincidunt, fringilla enim vel, tristique nisl. Lorem ipsum dolor sit amet.</p>
           </div>
           <div className='itemfooter'>
           <input type='radio' name='deplegable-footer3' id='desplegablefooter3' className='footer-desplegable-menu'></input>
             <label htmlFor='desplegablefooter3'>Contacto</label>
             <p className='footercontenido'>Bogotá, Colombia.</p>
             <p className='footercontenido'>Calle xx # xx - xx</p>
             <p className='footercontenido'>xxx xxxx xxx</p>
             <p className='footercontenido'>xxxxxx@mail.com</p>
           </div>
          </div> 
          <div className='footer-img-container'><img src={logofixit} alt='logofixit'></img></div>   
    </div>
    <div className='second-footer'><h6>Desarrollo web por Sense Digital</h6></div>
</div>
     
      );
    }
}

export default Footer;