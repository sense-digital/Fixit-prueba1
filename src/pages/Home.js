import React, {Component} from 'react';

import ReserveSection from '../components/ReserveSection';
import './styles/HomeSections.css';

class Home extends Component {
    render () {
        return (
        <React.Fragment>
            <div className="Section HeroHome">
            <h1>¿Banner de promociones</h1>
            </div>
            <div>
            <ReserveSection/>
            </div>
            <div className="Section">
            <h1>¿Cómo funciona fixit (3pasos)?</h1>
                <p>Mirar ejemplos de <a href="https://docs.google.com/document/d/18aeHBcwV5I5vAkznz-qjI3v22AhkrgBK-oY19aaS7GI/edit#">benchmark</a> y <a href="https://docs.google.com/document/d/1uBjCK9WADYEgkoD4GEI3VVHdHGJMeZgEMFYsKKuxdFs/edit#">comunicación PV</a> </p> 
            </div>
            <div className="Section HeroHome">
                <h1>¿Condiciones? </h1>
            </div>
            <div className="Section">
            <h1>Datos numéricos</h1>    
            </div>
        </React.Fragment>
        );
    }
}

export default Home;