import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function UniversesList() {

    const [universes, setUniverses] = useState([]);
   

    async function fetchUniverses() {
      const response = await fetch(
        `/api/universes`
      );
      const data = await response.json();
     
      setUniverses(data);
    
    }

    useEffect(() => {
        fetchUniverses();
    }, [])

    return(
    <div className="galaxies">
           
 

       {universes.map((universe, index) => (
     <Link to={`/universe/id/${universe.id}`} className="item">
    <div className="item" key={index} >
     
     <h2>{universe.name}</h2>
     
      
      
      <img src={universe.image} alt={universe.name}/>

      
     
    </div>
    </Link>
  ))}
        
   
</div>

) }

export default UniversesList;