import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import { FiCheckCircle } from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import './styles.css';

function Contact() {
  const [data, setData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const onChange = (evt) => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  }

  const withData = () => {
    console.log(data.nome);
    if(data.nome !== '' && data.email !== '' && data.assunto !== '' && data.mensagem !== '') {
      return true;
    }
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var msg = `De: ${data.nome}\nPara: MDB 15\nE-mail: ${data.email}\n\nAssunto: ${data.assunto}\nMensagem: ${data.mensagem}`
    msg = window.encodeURIComponent(msg);
    window.open("https://api.whatsapp.com/send?phone=5583987226043&text=" + msg, "_blank");
  }

  return (
    <div className="contact-page">
      <div className="hero">
        <div className="container">
          <div className="info">
            <div className="text">
              Deseja mudanças para Areial-PB?
            </div>
            <div className="title">
              Vamos conversar!
              <FiCheckCircle />
            </div>
            <div className="social-networks">
              <a rel="noopener noreferrer" href="https://www.facebook.com/cristina.alvesbalbinodesales" target="_blank"><FaFacebook /></a>
              <a rel="noopener noreferrer" href="https://www.instagram.com/cristinadeadriano_/" target="_blank"><FaInstagram /></a>
            </div>
          </div>
          <div className="image">
            {/* <img src={candidate} alt="MDB 15"/> */}
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="next-steps">
            <div className="title">Qual a proxima etapa?</div>
            <div className="text">Após essa etapa você só precisa:</div>
            <div className="steps">
              <p>1. Escolher o meio de envio</p>
              <p>2. Enviar mensagem para nós</p>
              <p>3. Aguardar nossa reposta que tentaremos<br/> enviar o mais rápido possivel.</p>
            </div>
          </div>
          <div className="box-contact">
            <div className="title">Contate-nos agora!</div>
            <div className="form">
              <div className="infos">
                <input type="text" onChange={onChange} placeholder="Digite seu nome aqui.." value={data.nome} name="nome" />
                <input type="email" onChange={onChange} placeholder="E-mail" value={data.email} name="email" />
              </div>
              <div className="contact">
                <div className="title">
                  Insira abaixo o que deseja nos contatar:
                </div>
                <input type="text" onChange={onChange} placeholder="Assunto(Sobre o que deseja contatar-nos" value={data.assunto} name="assunto" />
                <textarea onChange={onChange} placeholder="Digite aqui o que deseja contatar-nos" value={data.mensagem} name="mensagem" />
              </div>
              <div className="button-submit">
                <div className="whatsapp" onClick={withData() && handleSubmit}>
                  { withData() ? 'Whatsapp' : 'Preencha todas informações!!' }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;