import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Erreur.scss'

function Erreur() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='Erreur-Body'>
      <h1 className='Erreur-Titre'>404</h1>
      <p className='Erreur-Paragraphe'>Oups! La page que {isSmallScreen && <br />}
        vous demandez n'existe pas.</p>
      <div className='Erreur-Lien'><Link className='Lien' to="/">Retourner sur la page d'accueil.</Link></div>
    </div>
  );
}

export default Erreur;