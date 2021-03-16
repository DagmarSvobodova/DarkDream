import React, { useState, useEffect } from 'react';



function Body(props) {

    const [categories, setCategories] = useState([]);
    const [url, setUrl] = useState('');
    
    async function fetchCategories() {
      const response = await fetch(
        `/api/categories`
      );
      const data = await response.json();
      console.log(data);
    
      setCategories(data);
    
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div className="body">
               {categories.map((category, index) => (
            <div className={category.classname} key={index}   onClick={ () => {setUrl((`/category/id/${category.id}`))}} >
            <a href={url}> 
             <h2>{category.name}</h2>
              
              <img id={category.classname} src={category.image} alt={category.name}/>
              </a>
            </div>
          ))}
                
           
        </div>
    );
}

export default Body;