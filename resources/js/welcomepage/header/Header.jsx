import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Menu from './Menu';




function Header() {

    

    return (
        <>
           <div className="header">
       <Link to="/shop"><h1>DarkDream</h1></Link> 
            <h4> Your Space shop</h4>
        </div>   
    <Menu></Menu>
                

                

            
        </>
    );
}

export default Header;