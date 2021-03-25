import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';



function App() {
    const [myItems, setmyItems] = useState([]);

    async function fetchMyItems() {
      const response = await fetch(
        `/api/categories`
      );
      const data = await response.json();
      console.log(data);
    
      setmyItems(data);
    }

    useEffect(() => {
        fetchMyItems();
    }, setmyItems)
   

    return (
      <div className="my">
       <h1>Dagmar's items</h1>
       {myItems.map((item, index) => (
            <div key={index} className="items">
              <h2>{item.name}</h2>
              <p>{item.subcategory && item.subcategory.name}</p>
              <img src={item.image} />
              <p>price:  <h4>{item.price && item.price}</h4> </p>
               <h4> {item.user && item.user.name} </h4>
            </div>
          ))}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));