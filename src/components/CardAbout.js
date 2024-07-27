import React from 'react';
import './CardAbout.css';

const CardAbout = ({ id, text }) => {
  return (
    <div className="col-md-6">
      <div className="card card-about" id={`card-${id}`}>
        <div className="card-body d-flex align-items-center justify-content-center">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
