import React, { useState, useEffect } from 'react';




function Menu() {

    

    return (
        <div className="menu">
           
        <ul>
        <li><a href="/items">Show all</a></li>
        <li><a href="/universes">Choose univers</a></li>
        <li><a href="/galaxies">Searching by galaxies</a></li>
        <li><a href="/owners">Show owners</a></li>
        <li><a href="/filter">Filter</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/login">Login</a><a href="/register"> / Register</a></li>
        </ul>

        
            
        </div>
    );
}

export default Menu;