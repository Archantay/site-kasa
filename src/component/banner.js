import React from 'react';
import '../styles/Banner.scss';

const Banner = ({ backgroundImage, text }) => {
  return (
    <div className="banner">
      <img src={backgroundImage} alt="Bannière" className="banner-image" />
      <div className="banner-text">{text}</div>
    </div>
  );
};

export default Banner;