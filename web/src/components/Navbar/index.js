import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-mdb.png';
import './styles.css';

function Navbar() {
  function desactivateMenu() {
    const element = document.querySelector("#activate-menu");
    if(element) {
      element.checked = false;
      console.log(element);
    }
  }

  return (
    <header>
      <div className="container">
        <Link to="/" className="header-logo">
          <img src={logo} alt="MDB" />
        </Link>
        <input type="checkbox" id="activate-menu"/>
        <label htmlFor="activate-menu">
          <div className="burger-button">
            <span className="burger-icon"></span>
          </div>
        </label>
        <div className="header-content">
          <Link to="/" onClick={desactivateMenu}>
            <span>INICIO</span>
          </Link>
          <Link to="/blog">
            <span>POSTS</span>
          </Link>
          <Link to="/plano-de-governo">
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