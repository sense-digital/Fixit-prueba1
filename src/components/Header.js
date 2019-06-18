import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css';

class Header extends Component {
    render () {
    return (
    <header className='header'>
      <div className='container-header'>
       <figure className='logo-fixit-header'>
       <img src='../' alt="LogoFixIt"/>
       </figure>
       <nav className='menu-principal'>
           <ul>
               <li>
                   <a href='#admincliente'>Trabaja con FixIt</a>
               </li>
               <li>
                   <a href='#adminfix'>Soporte</a>
               </li>
               <li>
                   <a href='#login'>mi cuenta</a>
               </li>
               <li>
                   <a href='#arreglalo ya'>arreglalo ya</a>
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

