import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <button className="navbar-brand" onClick={scrollToTop}>Nikola Treimane</button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#lessons">Уроки английского</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Как проходят уроки?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Обо мне</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#questions">Часто задаваемые вопросы</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
