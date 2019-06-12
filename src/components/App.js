// COMPONENTE QUE DIRECCIONA TODOS LOS LINKS DE LA PÁGINA

import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AdminCliente from '../pages/AdminCliente';
import AdminFixit from '../pages/AdminFixit';
import Soporte from '../pages/Soporte';
import Trabajo from '../pages/Trabajo';
import ThankYou from '../pages/ThankYou';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admincliente" component={AdminCliente} />
                <Route exact path="/soporte" component={Soporte} />
                <Route exact path="/trabajo" component={Trabajo} />
                <Route exact path="/thankyou" component={ThankYou} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/adminfixit" component={AdminFixit} />
                <Route component={NotFound}/>
            </Switch>
        </Layout>
        </BrowserRouter>
        )
}

export default App;