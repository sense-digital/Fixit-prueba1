import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logofix-it.png';
import './styles/Header.css';

class Header extends Component {
    render () {
    return (
    <header className='header'>
      <div className='container-header'>
       <figure className='logo-fixit-header'>
           <Link to ='/'>
               <img src={logo} alt="LogoFixIt" href='/home' width='50px'/>
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
    
    }
}

export default Header;

