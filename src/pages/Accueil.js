import React from 'react';
import Banner from '../component/Banner.js';
import Card from '../component/Card.js';
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
            <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;