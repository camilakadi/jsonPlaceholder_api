import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home';
import Editar from './pages/Editar';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/editar/:id" component={Editar} />
            <Route path="/adicionar" component={Editar} />
        </BrowserRouter>
    )
}

export default Routes;