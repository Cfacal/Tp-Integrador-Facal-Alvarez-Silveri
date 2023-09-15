import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar () {
    return (
      <React.Fragment>
          <section> <h2 className='Titlenav'>Beat Music</h2></section>
        <nav className='navbar'>
          
          <Link className="linkHome"to="/">Home</Link>
          <Link className="linkHome"to="/VerTodasAlbum">Ver todos los Albums</Link>
          <Link className="linkHome"to="/VerTodasTracks">Ver todos los Tracks</Link>
          <Link className='linkFavoritos' to="/favoritos">Favoritos</Link>
        
        </nav>
      </React.Fragment>
      


    );
}

export default Navbar