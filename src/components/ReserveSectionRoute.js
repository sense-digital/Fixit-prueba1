import React from 'react';
import ReserveSection1 from './ReserveSection1';
import ReserveSection2 from './ReserveSection2';
import ReserveSection3 from './ReserveSection3';
import ReserveSection4 from './ReserveSection4';
import {Route, Link} from 'react-router-dom';

function ReserveSectionRoute() {
    return (
    <div>

        <Link to="/home">Reservesection1</Link> <br/>
        <Link to="/home/2">Reservesection2</Link> <br/>
        <Link to="/home/3">Reservesection3</Link> <br/>
        <Link to='/home/4'>Reservesection4</Link>

        <Route  exact path="/home" component={ReserveSection1} />
        <Route  path="/home/2" component={ReserveSection2} />
        <Route  path="/home/3" component={ReserveSection3} />
        <Route  path="/home/4" component={ReserveSection4} />

       
    </div>               
        )
}

export default ReserveSectionRoute;