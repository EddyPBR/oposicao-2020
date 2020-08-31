import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-mdb.png';
import './styles.css';

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="MDB" />
        </div>
        <div className="header-content">
          <Link to="/">
            <span>INICIO</span>
          </Link>
          <Link to="/posts">
            <span>POSTS</span>
          </Link>
          <Link to="/planodegoverno">
            <span>PLANO DE GOVERNO</span>
          </Link>
          <Link to="/candidatos">
            <span>CANDIDATOS 2020</span>
          </Link>
          <Link to="/sobre">
            <span>SOBRE</span>
          </Link>
          <Link to="/contato">
            <span>CONTATO</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;