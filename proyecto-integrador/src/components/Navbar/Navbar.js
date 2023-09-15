import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar () {
    return (
      <React.Fragment>
          <section> <h2 className='Titlenav'>Beat Music</h2></section>
        <nav className='navbar'>
          
          <Link className="linkHome"to="/">Home</Link>
          <Link className="linkHome"to="/VerTodas">Ver todas</Link>
          <Link className='linkFavoritos' to="/favoritos">Favoritos</Link>
        
        </nav>
      </React.Fragment>
      


    );
}

export default Navbar