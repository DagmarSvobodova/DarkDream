import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

function GalaxyItems() {
    let { id } = useParams();
    const [items, setItems] = useState([]);
    
    
    async function fetchItems() {
        const response = await fetch(
          `/api/item/galaxyid/${id}`
        );
        const data = await response.json();
        //console.log(data);
      
        setItems(data);
      
      }
      
      useEffect(() => {
          fetchItems();
      }, [])
      
    return(
      items.length ? 
        <div className="my">
          <div className="parent">
    
    <img src={items[0].galaxy.image} alt={items[0].galaxy.name}/>
    <h3>{items[0].galaxy.name}</h3>
    <p>{items[0].galaxy.info}</p>
    <Link to={`/universe/id/${items[0].universe.id}`} className="linktoparent">in {items[0].universe.name}  universe</Link>
    </div>
        <div className="galaxies">
      
             {items.map((item, index) => (
    
            <Link to={`/item/id/${item.id}`} className="item" key={index}>
          
           <h2>{item.name}</h2>
           <p>{item.subcategory.name} </p>
           <p>type: {item.type}</p>
            
            <img src={item.image} alt={item.name}/>
            { item.user_id ? 
            <h3>Already sold to {item.user.name}</h3> : 
              <h3>{item.price}</h3>
            }
             </Link>
         
          
            
           
          
        ))}
              
         </div>
      </div>
      :
      <div></div>
       
) }

export default GalaxyItems;



   



   
   

   
    
