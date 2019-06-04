import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css';

class Header extends React.Component {
    render () {
        return (
        <div className="header">
            <Link to='/'>
                <img src="" alt="LogoFixIt"/>
            </Link>
            <Link to='/admincliente'> <h4>admincliente</h4></Link>
            <Link to='/adminfixit'> <h4>adminfixit</h4></Link>
            <Link to='/login'> <h4>login</h4></Link>
            <Link to='/soporte'> <h4>soporte</h4></Link>
            <Link to='/thankyou'> <h4>thankyou</h4></Link>
            <Link to='/trabajo'> <h4>trabajo</h4></Link>
        </div>
      );
    }
}

export default Header;