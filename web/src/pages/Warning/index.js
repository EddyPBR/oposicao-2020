import React from 'react';
import teamwork from '../../assets/images/teamwork.jpg';

import './styles.css';

function Warning() {
  return (
    <div className="warning">
      <div className="container">
        <div className="image">
          <img src={teamwork} alt="Imagem simbolizando trabalho em equipe" />
          <a href='https://br.freepik.com/vetores/negocio'>Negócio vetor criado por pikisuperstar - br.freepik.com</a>
        </div>
        <div className="content">
          <h1 className="title">Ainda estamos em desenvolvimento...</h1>
          <p>
            Ainda estamos em desenvolvimento do nosso site por isso não estamos
            com todas páginas disponiveis no momento. Por favor, volte para o Blog
          </p>
        </div>
      </div>
    </div>
  );
}

export default Warning;