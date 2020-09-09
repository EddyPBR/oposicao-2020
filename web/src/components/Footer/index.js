import React from 'react';

import { Link } from 'react-router-dom';
import './styles.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="navigation">
          <ul>
            <Link to="/"><li>ÍNICIO</li></Link>
            <Link to="/blog"><li>POSTS</li></Link>
            <Link to="/plano-de-governo"><li>PLANO DE GOVERNO</li></Link>
            <Link to="/candidatos"><li>CANDIDATOS 2020</li></Link>
            <Link to="/sobre"><li>SOBRE</li></Link>
          </ul>
        </div>
        <div className="redes-sociais">
          <h1>
            Nos siga nas redes sociais e fique por dentro
            das novidades, lives e noticias
          </h1>
          <div className="networks">
            <div className="network"></div>
            <div className="network"></div>
            <div className="network"></div>
          </div>
        </div>
        <div className="contact">
          <h1>
            Dúvidas, sugestões, ou gostaria de fazer parte
            da nossa equipe?
          </h1>
          <div className="button">
            Contate-nos
          </div>
        </div>
      </div>
      <footer className="footer-footer-row">
        <span>Alguns direitos reservados</span>
        <div className="circle"></div>
        <span>Desenvolvido por: Edvaldo Junior | Félix Vicente | Ryan Lima</span>
      </footer>
    </footer>
  );
}

export default Footer;

