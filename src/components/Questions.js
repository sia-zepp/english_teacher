// src/components/Questions.js
import React from 'react';
import './Questions.css';

const Questions = () => {
  return (
    <div id="questions" className="questions">
      <div className="container">
        <h2>Часто задаваемые вопросы</h2>
        <div className="question-item">
          <h4>Question 1</h4>
          <p>Answer to question 1...</p>
        </div>
        <div className="question-item">
          <h4>Question 2</h4>
          <p>Answer to question 2...</p>
        </div>
        {/* Add more questions as needed */}
      </div>
    </div>
  );
};

export default Questions;
