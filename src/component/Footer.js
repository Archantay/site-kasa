import React from 'react';
import logo from '../images&logo/logo footer.png';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img className='logo-footer' src={logo} alt="Logo de l'entreprise" />
      </div>
      <p> © 2020 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;