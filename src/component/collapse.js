import React, { useState } from 'react';
import '../styles/collapse.scss';
import arrowSVG from '../images&logo/Vector.svg'

const CollapseComponent = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
          <div className="collapse-header" onClick={toggleCollapse}>
            <h2>{title}</h2>
            <button className={`collapse-button ${isOpen ? 'open' : ''}`}>
                <img src={arrowSVG} alt={isOpen ? 'Ouvrir' : 'Fermer'} className={isOpen ? 'open' : ''} />
            </button>
          </div>
          {isOpen && <div className="collapse-content">{content}</div>}
        </div>
      );
    };

export default CollapseComponent;