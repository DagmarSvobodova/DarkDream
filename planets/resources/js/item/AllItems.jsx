import React, { useState, useEffect } from 'react';




function AllItems() {

    const [items, setItems] = useState([]);
    const [url, setUrl] = useState('');

    async function fetchItems() {
      const response = await fetch(
        `/api/items`
      );
      const data = await response.json();
      console.log(data);
    
      setItems(data);
    
    }

    useEffect(() => {
        fetchItems();
    }, [])

    return (
       
       

        <div className="items">
               {items.map((item, index) => (
            <div className="item" key={index}  onClick={ () => {setUrl((`/api/category/id/${item.id}`))}} >
             <a href={url}> 
             <h2>{item.name}</h2>
             </a>
              { item.subcategory_id ? 
              <p>{item.subcategory.name}</p> :
              <p>starship</p>
              }
                
              
              
              <img src={item.image} alt={item.name}/>
           
              { item.user_id ? 
              <h3>Already sold to {item.user.name}</h3> : 
                <h3>{item.price}</h3>
              }
              
             
            </div>
          ))}
                
           
        </div>
        
    );
}

export default AllItems;