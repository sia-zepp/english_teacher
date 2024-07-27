import React from 'react';
import './CourseCard.css';

const CourseCard = ({ id, title, description, price, detailedDescription, isClickable, show, onClick }) => {
  return (
    <div className="timeline-step">
      {show && (
        <div className="timeline-icon">
          <span>{id}</span>
        </div>
      )}
      <div className="timeline-content">
        <h5 className="card-title">{title}</h5>
        <p
          className={`card-text ${isClickable ? 'clickable' : ''}`}
          onClick={isClickable ? onClick : undefined}
        >
          {description}
        </p>
        {price && <p className="card-text">{price}</p>}
      </div>
    </div>
  );
};

export default CourseCard;