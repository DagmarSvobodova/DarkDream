

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../welcomepage/header/Header';




function App() {

    const [items, setItems] = useState([]);
    const [url, setUrl] = useState('');

    async function fetchItems() {
      const response = await fetch(
        `/api/item/categoryid/1`
      );
      const data = await response.json();
      console.log(data);
    
      setItems(data);
    
    }

    useEffect(() => {
        fetchItems();
    }, [])

    return (
       
       

        <div className="my">
          <Header></Header>
          <div className="galaxies">
               {items.map((item, index) => (
            
            <div className="item">
             <h2>{item.name}</h2>
        
              
              <p>type: {item.type}</p>
              
              
              
              <img src={item.image} alt={item.name}/>
              { item.user_id ? 
              <h3>Already sold to {item.user.name}</h3> : 
                <h3>{item.price}</h3>
              }
           
              </div>
              
             
            
          ))}
                
           </div>
        </div>
        
    );
}


ReactDOM.render(<App />, document.querySelector('#app'));