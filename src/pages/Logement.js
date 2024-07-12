import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsData from '../logement.json';
import Slideshow from '../component/Carrousel.js';
import HostInfo from '../component/Hostinfo.js';
import Tags from '../component/Tags.js';
import Rating from '../component/Rating.js';
import Collapse from '../component/Collapse.js'
import '../styles/Logement.scss';

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logementsData.find(log => log.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/erreur'); // Redirige vers la page d'erreur
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; // Return null to render nothing while the redirection is happening
  }

  return (
    <div className="logement">
    <Slideshow pictures={logement.pictures} />
    <div className="logement-header">
      <div className="logement-title">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <Tags tags={logement.tags} />
      </div>
      <div className="logement-info">
        <HostInfo host={logement.host} />
        <Rating rating={logement.rating} />
      </div>
    </div>
    <div className="logement-collapse">
      <Collapse
       title="Description">
        <p>{logement.description}</p>
      </Collapse>
      <Collapse title="Équipements">
        <ul>
          {logement.equipments.map((equipments, index) => (
            <li key={index}>{equipments}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  </div>
);
};

export default Logement;