import React from 'react';
import fullStar from '../images&logo/star-active 3.svg';
import emptyStar from '../images&logo/star-inactive 1.svg';
import '../styles/Rating.scss';

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
        key={star}
        src={rating >= star ? fullStar : emptyStar}
        alt={rating >= star ? 'Full Star' : 'Empty Star'}
        className="star"
      />
      ))}
    </div>
  );
};

export default Rating;