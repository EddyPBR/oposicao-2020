import React from 'react';
import { Link } from 'react-router-dom';
import candidate from '../../assets/images/RB2_2466.png';
import logo from "../../assets/images/logo-mdb.png";
import image_test from "../../assets/images/image.jpg";

import './styles.css';

import Post from '../../components/Post';

function Index() {

  // Request to API with 3 latest posts;
  const posts = [
    {
      linkTo: "/blog/1",
      imageURL: image_test,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Algum Candidato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo convallis lorem, efficitur aliquam quam posuere id. Quisque vitae orci orci. In aliquam bibendum turpis vitae cursus"
    },
    {
      linkTo: "/blog/1",
      imageURL: image_test,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Algum Candidato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo convallis lorem, efficitur aliquam quam posuere id. Quisque vitae orci orci. In aliquam bibendum turpis vitae cursus"
    },
    {
      linkTo: "/blog/1",
      imageURL: image_test,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Algum Candidato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo convallis lorem, efficitur aliquam quam posuere id. Quisque vitae orci orci. In aliquam bibendum turpis vitae cursus"
    }
  ];

  return (
    <div className="home-page">
      <div className="recent-posts">
        {posts.map( (post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
      <div className="candidate-section">
        <div className="container">
          <div className="candidate">
            <img src={candidate} alt=""/>
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