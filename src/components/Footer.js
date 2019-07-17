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
             <h3>Acerca de nosotros</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget libero tincidunt, fringilla enim vel, tristique nisl. Lorem ipsum dolor sit amet.</p>
           </div>
           <div className='itemfooter'>
             <h3>Trabaja con nosotros</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget libero tincidunt, fringilla enim vel, tristique nisl. Lorem ipsum dolor sit amet.</p>
           </div>
           <div className='itemfooter'>
             <h3>Contacto</h3>
             <p>Bogotá, Colombia.</p>
             <p>Calle xx # xx - xx</p>
             <p>xxx xxxx xxx</p>
             <p>xxxxxx@mail.com</p>
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