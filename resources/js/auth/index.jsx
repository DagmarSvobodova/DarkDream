import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from '../welcomepage/header/Header.jsx';

import Login from './Login.jsx';
import Register from './Register.jsx';

ReactDOM.render((
    <Router>
        <Header></Header>
        <Switch>
            <Route path="/login" children={ <Login /> } />
            <Route path="/register" children={ <Register /> } />
        </Switch>
    </Router>
), document.querySelector('#app'));