import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images&logo/LOGO.png';
import '../styles/Header.scss'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="Logo de l'entreprise" />
        </div>
      <nav>
          <div><Link to="/">Accueil</Link></div>
          <div><Link to="/APropos">À propos</Link></div>
      </nav>
    </header>
  );
};

export default Header;