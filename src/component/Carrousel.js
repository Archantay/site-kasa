import React, { useState } from 'react';
import '../styles/Carrousel.scss';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  if (pictures.length === 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Logement" className="slideshow-image" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />
      <div className="slideshow-controls">
        <button onClick={previousSlide} className="slideshow-arrow">&#10094;</button>
        <span className="slideshow-counter">{currentIndex + 1} / {pictures.length}</span>
        <button onClick={nextSlide} className="slideshow-arrow">&#10095;</button>
      </div>
    </div>
  );
};

export default Slideshow;