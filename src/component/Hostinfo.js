import React from 'react';
import '../styles/HostInfo.scss';

const HostInfo = ({ host }) => {
  return (
    <div className="host-info">
      <span className="host-name">{host.name}</span>
      <img className="host-picture" src={host.picture} alt={host.name} />
    </div>
  );
};

export default HostInfo;