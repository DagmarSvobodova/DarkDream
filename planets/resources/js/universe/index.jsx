import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../welcomepage/header/Header.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UniversesList from './UniversesList.jsx';
import UniverseItems from './UniverseItems.jsx';




       
    
  ReactDOM.render ((
    <Router>
    <Header></Header>
    <Switch>
     <Route
          path="/universes" children={ <UniversesList /> }
         
        />
        <Route
          path="/universe/id/:id" 
        children={ <UniverseItems /> }
        />
      </Switch>
    </Router>
           
        
            
        ), document.querySelector('#app'));
    

  

