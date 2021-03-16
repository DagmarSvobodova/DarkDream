import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../welcomepage/header/Header.jsx';
import GalaxiesList from './GalaxiesList';
import GalaxyItems from './GalaxyItems';
import ItemDetail from '../item/ItemDetail';
import {


  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





       
    
  ReactDOM.render ((
    <Router>
        
    <Header></Header>
    <Switch>
     <Route
          path="/galaxies" children={ <GalaxiesList /> }
         
        />
        <Route
          path="/galaxy/id/:id" 
        children={ <GalaxyItems /> }
        />
         <Route
          path="/item/id/:id" 
        children={ <ItemDetail /> }
        />
      </Switch>
    </Router>
           
        
            
        ), document.querySelector('#app'));
    

  

