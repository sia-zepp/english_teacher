import React from 'react';
import './CourseDescription.css'; // Importing the CourseDescription CSS
import SubscribeButton from './SubscribeButton'; // Importing the SubscribeButton component

const CourseDescription = ({ course, onClose }) => {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500); // Wait for the animation to complete before closing
  };

  return (
    <>
      <div className="course-description-backdrop" onClick={handleClose}></div> {/* Backdrop for the modal */}
      <div className={`course-description ${isClosing ? 'fade-out' : ''}`}>
        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
        <header className="course-description-header">
          <h3>{course.title}</h3>
        </header>
        <div className="course-description-content">
          <p>{course.detailedDescription}</p>
        </div>
        <div className="course-description-footer">
          <SubscribeButton />
        </div>
      </div>
    </>
  );
};

export default CourseDescription;
