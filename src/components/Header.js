import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logofix-it.png';
import './styles/Header.css';
import firebase from 'firebase/app';
import 'firebase/auth';


class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:{},
        }
    }

    //IDENTIFICA SI EL USUARIO ESTA LOGGEADO O NO

    componentDidMount(){
        this.authListener();
    }

    authListener() {
        firebase.auth().onAuthStateChanged((user) => {       
            if (user) {
              // User is signed in.
            this.setState({user});        
            } else {
              // User is signed out.
              this.setState({user:null});
            }
          });}
   
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
               {this.state.user ? (<Link to='/admincliente'>Tu cuenta</Link>):(<Link to='/LoginCliente'>Inicia sesión</Link>)}
               </li>
               <li>
                   <Link to='/#arreglaloYa'>arreglalo ya</Link>
               </li>
           </ul>
       </nav>
      </div>
    </header>
    );
    
    }
}

export default Header;

