import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

function ItemDetail(props) {
    let { id } = useParams();
    const [item, setItem] = useState([]);
    
    
    async function fetchItems() {
        const response = await fetch(
          `/api/item/id/${id}`
        );
        const data = await response.json();
        //console.log(data);
      
        setItem(data);
      
      }
      
      useEffect(() => {
          fetchItems();
      }, [])
      
    return(
      item ? 
       <div className="my">
        <div className="itemDetail">
      
           
           <h2>{item.name}</h2>
           <p>type: {item.type}</p>
           <p>{item.info} </p>
           <img src={item.image} alt={item.name}/>


           { item.subcategory_id ? 
           <div className="itemDetail">
           <p>{item.subcategory.name} </p>
           <p>{item.universe.name} </p>
           <p>{item.galaxy.name} </p>
           </div> :
           <p>starship</p>
           }
            
           
            { item.user_id ? 
            <h3>Already sold to {item.user.name}</h3> : 
              <h3>{item.price}</h3> }
              
        </div>
        </div>
      :
      <div></div>
       
) }

export default ItemDetail;



   



   
   

   
    
