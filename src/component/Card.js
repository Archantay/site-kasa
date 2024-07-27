import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <div className="card">

      <Link to={`/logement/${id}`} className="card__link">
        <img src={cover} alt={title} className="card__image" />
        {title}
      </Link>
    </div>
  );
};

export default Card;
