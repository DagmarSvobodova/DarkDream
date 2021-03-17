
import ReactDOM from 'react-dom';
import {


  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GalaxiesList from './galaxy/GalaxiesList';
import Header from './welcomepage/header/Header';
import UniversesList from './universe/UniversesList';
import GalaxyItems from './galaxy/GalaxyItems';
import UniverseItems from './universe/UniverseItems';
import ItemDetail from './item/ItemDetail';
import AllItems from './item/AllItems';
import Body from './welcomepage/mainPage/Body';

       
    
  ReactDOM.render ((
    <Router>
        
    <Header></Header>
    <Switch>
    <Route
          path="/shop" children={ <Body /> }
         
        />
        <Route
    
          path="/galaxies" children={ <GalaxiesList /> }
         
        />
        <Route
          path="/galaxy/id/:id" 
        children={ <GalaxyItems /> }
        />
        <Route
          path="/universes" 
        children={ <UniversesList /> }
        />
           <Route
          path="/universe/id/:id" 
        children={ <UniverseItems /> }
        />
        
         <Route
          path="/item/id/:id" 
        children={ <ItemDetail /> }
        />
        <Route
          path="/items" 
        children={ <AllItems /> }
        />
      </Switch>
    </Router>
           
        
            
        ), document.querySelector('#app'));
    

  

