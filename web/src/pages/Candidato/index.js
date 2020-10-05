import React from 'react';
import candidate from '../../assets/images/candidata-prefeita.png'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import './styles.css';

function Candidato() {
  return (
    <div className="candidato">
      <div className="hero">
        <div className="container">
          <div className="info">
            <div className="name">Aritana</div>
            <div className="number">15966</div>
            <div className="social-networks">
              <a rel="noopener noreferrer" href="/" target="_blank" className="facebook">
                <FaFacebook />
              </a>
              <a rel="noopener noreferrer" href="/" target="_blank" className="instagram">
                <FaInstagram />
              </a>
              <a rel="noopener noreferrer" href="https://facebook.com" target="_blank" className="youtube">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="image" style={{ backgroundImage: `url(${candidate})` }}>
          </div>
        </div>
      </div>
      <div className="bio">
        <div className="container">
          <div className="title">BIOGRAFIA</div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel pharetra libero. Integer eget justo eu neque condimentum interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut imperdiet ligula egestas ligula tincidunt ullamcorper. Sed pellentesque, nunc non venenatis efficitur, nisi libero ultricies ex, et ullamcorper odio quam et metus. Morbi finibus rutrum lectus non porta. Etiam id felis non massa semper pharetra. Nullam et ex nec mauris ornare laoreet. Morbi magna ligula, blandit in consectetur ut, ornare sed est. Aliquam auctor nibh ac justo blandit convallis. Pellentesque eu porttitor sem. Mauris turpis ex, pharetra sit amet metus eget, tempor accumsan metus. Fusce tellus turpis, fringilla id ex sed, semper luctus sapien. Maecenas suscipit vestibulum nibh ac dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel pharetra libero. Integer eget justo eu neque condimentum interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut imperdiet ligula egestas ligula tincidunt ullamcorper. Sed pellentesque, nunc non venenatis efficitur, nisi libero ultricies ex, et ullamcorper odio quam et metus. Morbi finibus rutrum lectus non porta. Etiam id felis non massa semper pharetra. Nullam et ex nec mauris ornare laoreet. Morbi magna ligula, blandit in consectetur ut, ornare sed est. Aliquam auctor nibh ac justo blandit convallis. Pellentesque eu porttitor sem. Mauris turpis ex, pharetra sit amet metus eget, tempor accumsan metus. Fusce tellus turpis, fringilla id ex sed, semper luctus sapien. Maecenas suscipit vestibulum nibh ac dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel pharetra libero. Integer eget justo eu neque condimentum interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut imperdiet ligula egestas ligula tincidunt ullamcorper. Sed pellentesque, nunc non venenatis efficitur, nisi libero ultricies ex, et ullamcorper odio quam et metus. Morbi finibus rutrum lectus non porta. Etiam id felis non massa semper pharetra. Nullam et ex nec mauris ornare laoreet. Morbi magna ligula, blandit in consectetur ut, ornare sed est. Aliquam auctor nibh ac justo blandit convallis. Pellentesque eu porttitor sem. Mauris turpis ex, pharetra sit amet metus eget, tempor accumsan metus. Fusce tellus turpis, fringilla id ex sed, semper luctus sapien. Maecenas suscipit vestibulum nibh ac dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel pharetra libero. Integer eget justo eu neque condimentum interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut imperdiet ligula egestas ligula tincidunt ullamcorper. Sed pellentesque, nunc non venenatis efficitur, nisi libero ultricies ex, et ullamcorper odio quam et metus. Morbi finibus rutrum lectus non porta. Etiam id felis non massa semper pharetra. Nullam et ex nec mauris ornare laoreet. Morbi magna ligula, blandit in consectetur ut, ornare sed est. Aliquam auctor nibh ac justo blandit convallis. Pellentesque eu porttitor sem. Mauris turpis ex, pharetra sit amet metus eget, tempor accumsan metus. Fusce tellus turpis, fringilla id ex sed, semper luctus sapien. Maecenas suscipit vestibulum nibh ac dapibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidato;