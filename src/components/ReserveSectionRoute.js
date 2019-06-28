import React from 'react';
import ReserveSection1 from './ReserveSection1';
import ReserveSection2 from './ReserveSection2';
import ReserveSection3 from './ReserveSection3';
import ReserveSection4 from './ReserveSection4';
import {Route, Link} from 'react-router-dom';

function ReserveSectionRoute() {
    return (
    <div>

        <Link to="/home">2222222222</Link> <br/>
        <Link to="/home/2">333333333333333333</Link> <br/>
        <Link to="/home/3">44444444444444</Link> <br/>
        <Link to='/home/4'>Trabaja con FixIt</Link>

        <Route  exact path="/home" component={ReserveSection1} />
        <Route  path="/home/2" component={ReserveSection2} />
        <Route  path="/home/3" component={ReserveSection3} />
        <Route  path="/home/4" component={ReserveSection4} />

       
    </div>               
        )
}

export default ReserveSectionRoute;