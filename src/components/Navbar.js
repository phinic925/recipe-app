import React from "react";

function Navbar() {
    return(
        <header className='header4'>
        
        <nav>
            <ul>
               <li><Link to='/'> Home </Link></li> 
               <li> <Link to='/about'> About </Link></li>
               <li> <Link to='/recipe'> Add Recipe </Link></li>
            </ul>
        </nav>
    </header>
    )
    
}
export default Navbar;