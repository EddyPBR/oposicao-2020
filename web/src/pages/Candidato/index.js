import React, { useState, useEffect } from 'react';
// import candidate from '../../assets/images/candidata-prefeita.png'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import api from '../../services/api';

import './styles.css';

function Candidato(props) {
  const id_candidate = props.match.params.name_candidate;

  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadCandidate = async () => {
      const response = await api.get(`/candidate/${id_candidate}`);

      setCandidate(response.data.data.user_info);
    }

    loadCandidate();
  });

  return (
    <div className="candidato">
      <div className="hero">
        <div className="container">
          <div className="info">
            <div className="name">{ candidate.name }</div>
            <div className="number">{ candidate.candidate_number }</div>
            <div className="social-networks">
              {candidate.facebook &&
                <a rel="noopener noreferrer" href={ candidate.facebook } target="_blank" className="facebook">
                  <FaFacebook />
                </a>
              }
              {candidate.instagram &&
                <a rel="noopener noreferrer" href={ candidate.instagram } target="_blank" className="instagram">
                  <FaInstagram />
                </a>
              }
              {candidate.youtube &&
                <a rel="noopener noreferrer" href={ candidate.youtube } target="_blank" className="youtube">
                  <FaYoutube />
                </a>
              }
            </div>
          </div>
          <div className="image" style={{ backgroundImage: `url(https://oposicaoareial.000webhostapp.com/storage${candidate.image})` }}>
          </div>
        </div>
      </div>
      <div className="bio">
        <div className="container">
          <div className="title">BIOGRAFIA</div>
          <div className="text">
            { candidate.bio }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidato;