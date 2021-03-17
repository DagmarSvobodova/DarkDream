import { Link } from "react-router-dom";




function Menu() {

    

    return (
        <div className="menu">
         
        <ul>
        <li><Link to="/items">Show all</Link></li>
        <li><Link to="/universes">Choose univers</Link></li>
        <li><Link to="/galaxies">Searching by galaxies</Link></li>
        <li><a href="/owners">Show owners</a></li>
        <li><a href="/filter">Filter</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/login">Login</a><a href="/register"> / Register</a></li>
        </ul>

        
            
        </div>
    );
}

export default Menu;