import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function GalaxiesList() {

        const [galaxies, setGalaxies] = useState([]);
        
    
        async function fetchGalaxies() {
          const response = await fetch(
            `/api/galaxies`
          );
          const data = await response.json();
         
          setGalaxies(data);
        
        }
    
        useEffect(() => {
            fetchGalaxies();
        }, [])
    
        return (
           
           
            
            <div className="galaxies">
            
                   {galaxies.map((galaxy, index) => (
              <Link to={`/galaxy/id/${galaxy.id}`} className="item" key={index}>
                
              
                 <h2>{galaxy.name}</h2>
              
                  
                  <img src={galaxy.image} alt={galaxy.name}/>
               <p>in: {galaxy.universe.name} universe</p>
                  
                 
              
                </Link>
              ))}
                    
               
            </div>
            
           
        );
    }

  

export default GalaxiesList;