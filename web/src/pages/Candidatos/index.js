import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

function Candidatos() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const loadCandidates = async () => {
      const response = await api.get('/candidates');

      setCandidates(response.data);
    }

    loadCandidates();
  }, [])

  return (
    <div className="candidatos">
      <div className="container">
        <div className="majoritaria">
          <div className="content">
            <div className="title">
              CHAPA MAJORITARIA
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula eros, sagittis id maximus eu, consequat nec metus. Etiam vulputate pulvinar mattis. Donec at dignissim quam, vel tristique ligula. Nullam tellus sapien, efficitur a nisi nec, congue pretium tortor. 
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula eros, sagittis id maximus eu, consequat nec metus. Etiam vulputate pulvinar mattis. Donec at dignissim quam, vel tristique ligula. Nullam tellus sapien, efficitur a nisi nec, congue pretium tortor. 
              </p>
            </div>
          </div>
          <div className="image">
          </div>
        </div>
        <div className="vereadores">
          <div className="title">
            CONHEÇA NOSSOS CANDIDATOS PARA AS ELEIÇÕES DE 2020
          </div>
          
          { candidates.map(candidate => (
            <div key={ candidate.id } className="container-vereadores">
              <Link to={`/candidatos/${candidate.id}`} className="vereador">
                <div className="image">
                  <img src={`https://oposicaoareial.000webhostapp.com/storage${candidate.image}`} alt={ candidates.name }/>
                </div>
                <div className="content">
                  <div className="name">
                    { candidate.name } 
                  </div>
                  <div className="number">
                    { candidate.candidate_number }
                  </div>  
                </div>
              </Link>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}

export default Candidatos;