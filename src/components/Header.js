import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css';

class Header extends Component {
    render () {
    return (
    <header className='header'>
      <div className='container-header'>
       <figure className='logo-fixit-header'>
           <Link to ='/'>
               <img src='../logofix-it.png' alt="LogoFixIt" href='/home'/>
           </Link>
       </figure>
       <nav className='menu-principal'>
           <ul>
               <li>
                   <Link to='/trabajo'>Trabaja con FixIt</Link>
               </li>
               <li>
                   <Link to='/soporte'>Soporte</Link>
               </li>
               <li>
                   <Link to='/admincliente'>mi cuenta</Link>
               </li>
               <li>
                   <Link to='#arreglalo ya'>arreglalo ya</Link>
               </li>
           </ul>
       </nav>
      </div>
    </header>
    );
      // <div className="header">
      //     <Link to='/'>
      //         <img src="" alt="LogoFixIt"/>
      //     </Link>
      //     <Link to='/admincliente'> <h4>admincliente</h4></Link>
      //     <Link to='/adminfixit'> <h4>adminfixit</h4></Link>
      //     <Link to='/login'> <h4>login</h4></Link>
      //     <Link to='/soporte'> <h4>soporte</h4></Link>
      //     <Link to='/thankyou'> <h4>thankyous</h4></Link>
      //     <Link to='/trabajo'> <h4>trabajo</h4></Link>
      // </div>
    }
}

export default Header;

