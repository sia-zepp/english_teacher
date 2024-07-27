import React from 'react';
import './SubscribeButton.css'; // Importing the SubscribeButton CSS

const SubscribeButton = () => {
  return (
    <a 
      href="https://docs.google.com/forms/d/e/1FAIpQLSf-Zna7jsY0ek7d-3xx-_5efQFGcbhvqX0sfbEaQSa6VCXZpQ/viewform" 
      target="_blank" 
      rel="noopener noreferrer"
      className="btn btn-warning mt-4 mb-5"
    >
      ЗАПИСАТЬСЯ НА УРОК
    </a>
  );
};

export default SubscribeButton;
