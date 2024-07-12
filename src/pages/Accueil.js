import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../component/Banner.js';
import bannerImage from '../images&logo/banner accueil.png';
import '../styles/Accueil.scss'
import logementsData from '../logement.json'

const Accueil = () => {
  
  return (
    <div>
      <Banner backgroundImage={bannerImage} text="Chez vous, partout et ailleurs" />
      <div className="logements">
        {logementsData.map(logement => (
          <div key={logement.id} className="card">
            <Link to={`/logement/${logement.id}`}>
              <img src={logement.cover} alt={logement.title} className="cover-image" />
              <div className="card-title">{logement.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;