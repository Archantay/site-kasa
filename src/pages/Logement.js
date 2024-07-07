import React from 'react';
import { useParams } from 'react-router-dom';

const Logement = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Détails du logement {id}</h1>
      <p>Informations détaillées sur le logement.</p>
    </div>
  );
};

export default Logement;