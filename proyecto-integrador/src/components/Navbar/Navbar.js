import React from 'react';
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className='navbar'>
      
          <Link className="linkHome"to="/">Home</Link>
          <Link className="linkHome"to="/VerTodas">Ver todas</Link>
          <Link className='linkFavoritos' to="/favoritos">Favoritos</Link>
        
        </nav>


    );
}

export default Navbar