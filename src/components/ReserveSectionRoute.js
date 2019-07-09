//ENRUTADOR DE LA SECCIÓN DE RESERVAS


import React from 'react';
import ReserveSection1 from './ReserveSection1';
import ReserveSection2 from './ReserveSection2';
import ReserveSection3 from './ReserveSection3';
import ReserveSection4 from './ReserveSection4';
import {Route, Link} from 'react-router-dom';

function ReserveSectionRoute() {
    return (
    <div>

        <Route  exact path="/home" component={ReserveSection1} />
        <Route  path="/home/2" component={ReserveSection2} />
        <Route  path="/home/3" component={ReserveSection3} />
        <Route  path="/home/4" component={ReserveSection4} />

       
    </div>               
        )
}

export default ReserveSectionRoute;