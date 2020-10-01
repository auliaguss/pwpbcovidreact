import React from 'react';
import './style/navbar.css';

function Navbar(){
    return(
    <nav className="stroke">
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Berita</a></li>
          <li><a href="#">Pencegahan</a></li>
          <li><a href="#">RS</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
  </nav>
  )
}

export default Navbar;