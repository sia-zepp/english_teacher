// src/components/Header.js
import React from 'react';
import './Header.css';
import headerImage from '../assets/images/5843671063886676091.jpg';

const Header = () => {
  return (
    <header className="header" id="home">
      {/* <Navbar /> */}
      <div className="header-content d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6 text-center text-md-left">
              <h1>Nikola Treimane</h1>
              <h2 className="subtitle">квалифицированный педагог английского</h2>
            </div>
            <div className="col-12 col-md-6">
              <img src={headerImage} alt="Nikola Treimane" className="img-fluid header-image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
