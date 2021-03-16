import React, { useState, useEffect } from 'react';
import Menu from './Menu';




function Header() {

    

    return (
        <>
           <div className="header">
       <a href="/shop"><h1>DarkDream</h1></a> 
            <h4> Your Space shop</h4>
        </div>   
    <Menu></Menu>
                

                

            
        </>
    );
}

export default Header;