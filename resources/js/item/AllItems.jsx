import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



function AllItems() {

    const [items, setItems] = useState([]);
    

    async function fetchItems() {
      const response = await fetch(
        `/api/items`
      );
      const data = await response.json();
    //  console.log(data);
    
      setItems(data);
    
    }

    useEffect(() => {
        fetchItems();
    }, [])

    return (
       
      items ? 

        <div className="items">
               {items.map((item, index) => (
          <Link to={`/item/id/${item.id}`} className="item" key={index}>
           
             <h2>{item.name}</h2>
             
              { item.subcategory_id ? 
              <p>{item.subcategory.name}</p> :
              <p>starship</p>
              }
                
              
              
              <img src={item.image} alt={item.name}/>
           
              { item.user_id ? 
              <h3>Already sold to {item.user.name}</h3> : 
                <h3>{item.price}</h3>
              }
              
             
        
            </Link>
          ))}
                
           
        </div> :
        <div></div>
        
    );
}

export default AllItems;