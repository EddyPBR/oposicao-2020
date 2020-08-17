import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-mdb.png';
import './styles.css';

function Navbar() {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="MDB" />
      </div>
      <div className="header-content">
        <Link to="/">
          <spam>INICIO</spam>
        </Link>
        <Link to="/posts">
          <spam>POSTS</spam>
        </Link>
        <Link to="/planodegoverno">
          <spam>PLANO DE GOVERNO</spam>
        </Link>
        <Link to="/candidatos">
          <spam>CANDIDATOS 2020</spam>
        </Link>
        <Link to="/sobre">
          <spam>SOBRE</spam>
        </Link>
        <Link to="/contato">
          <spam>CONTATO</spam>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;