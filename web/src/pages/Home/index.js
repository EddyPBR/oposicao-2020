import React from 'react';
import { Link } from 'react-router-dom';
// import candidate from '../../assets/images/RB2_2466.png';
import logo from '../../assets/images/logo-mdb.png';

import './styles.css';

function Index() {
  return (
    <div className="home-page">
      <div className="recent-posts">
        <div className="recent-post">
          <div className="image">
          </div>
          <div className="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <blockquote>por <span>Algum Candidato</span></blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo convallis lorem, efficitur aliquam quam posuere id. Quisque
            vitae orci orci. In aliquam bibendum turpis vitae cursus
          </p>
        </div>
        <div className="recent-post">
          <div className="image">
          </div>
          <div className="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <blockquote>por <span>Algum Candidato</span></blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo convallis lorem, efficitur aliquam quam posuere id. Quisque
            vitae orci orci. In aliquam bibendum turpis vitae cursus
          </p>
        </div>
        <div className="recent-post">
          <div className="image">
          </div>
          <div className="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <blockquote>por <span>Algum Candidato</span></blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo convallis lorem, efficitur aliquam quam posuere id. Quisque
            vitae orci orci. In aliquam bibendum turpis vitae cursus
          </p>
        </div>
      </div>
      <div className="candidate-section">
        <div className="candidate">
        </div>
        <div className="content">
          <div className="title">
            A NOSSA CANDIDATA
          </div>
          <div className="divider"></div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            commodo convallis lorem, efficitur aliquam quam posuere id. Quisque
            vitae orci orci. In aliquam bibendum turpis vitae cursus
          </div>
          <Link className="button" to="/candidates">
            Ver todos os candidatos
          </Link>
        </div>
      </div>
      <div className="contact-box">
        <div className="title">
          Dúvidas, sugestões, quer fazer parte do nosso trabalho? 
        </div>
        <Link className="button" to="/contact">
          Entre em contato
        </Link>
      </div>
      <div className="apoiadores-section">
        <div className="box">
          <div className="title">
            CONHEÇA NOSSOS APOIADORES
          </div>
          <div className="apoiadores">
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
            <div className="apoiador">
              <img src={logo} alt="MDB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;