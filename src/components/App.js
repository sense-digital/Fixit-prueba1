// COMPONENTE QUE DIRECCIONA TODOS LOS LINKS DE LA PÁGINA

import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AdminCliente from '../pages/AdminCliente';
import AdminFixit from '../pages/AdminFixit';
import Soporte from '../pages/Soporte';
import Trabajo from '../pages/Trabajo';
import ThankYou from '../pages/ThankYou';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admincliente" component={AdminCliente} />
            <Route exact path="/adminfixit" component={AdminFixit} />
            <Route exact path="/soporte" component={Soporte} />
            <Route exact path="/trabajo" component={Trabajo} />
            <Route exact path="/thankyou" component={ThankYou} />
        </BrowserRouter>
        )
}

export default App;