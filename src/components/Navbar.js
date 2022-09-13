import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className='header4'>
        
        <nav>
            <ul>
               <li><Link to='/'> Home </Link></li> 
               <li> <Link to='/about'> Reviews </Link></li>
               <li> <Link to='/recipe'> Add Recipe </Link></li>
            </ul>
        </nav>
    </div>
    )
    
}
export default Navbar;