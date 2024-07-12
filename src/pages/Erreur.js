import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Erreur.scss'

function Erreur() {
  return (
    <div className='Erreur-Body'>
      <h1 className='Erreur-Titre'>404</h1>
      <p className='Erreur-Paragraphe'>Oups! La page que vous demandez n'existe pas.</p>
      <div className='lien'><Link to="/">Retourner sur la page d'accueil.</Link></div>
    </div>
  );
}

export default Erreur;