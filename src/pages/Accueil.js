import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../component/banner.js';
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
            <Link to={`/logement/${logement.id}`}>{logement.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;