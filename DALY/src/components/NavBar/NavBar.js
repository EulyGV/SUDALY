import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <h5>SU DALY</h5>
      <ul className="nav">
        <li className="nav-item"><Link to="/Home">CASA</Link></li>
        <li className="nav-item"><Link to="/About">Acerca de</Link></li>
        <li className="nav-item"><Link to="/Topics">Indice</Link></li>
        <li className="nav-item"><Link to="/Login">Login</Link></li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
