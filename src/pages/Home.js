import React from 'react';

import OptionBox from '../components/OptionBox';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/HomeSections.css';

class Home extends React.Component {
    render () {
        return (
        <div>
            <Header />
            <div className="Section HeroHome">
            <h1>¿Banner de promociones</h1>
            </div>
            <div>
            <OptionBox producto="Productito"/>
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
            <Footer />
        </div>
        

        );
    }
}

export default Home;