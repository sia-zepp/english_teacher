import React from 'react';
import './Footer.css';
import BackToTop from './BackToTop';
import TelegramIcon from './TelegramIcon';

const Footer = () => {
  return (
    <div className="footer">
      <TelegramIcon/>
      <BackToTop />
      <div className="container text-center">
        <p>© 2024 Nikola Treimane</p>
        <p>Developed by Vladimirs Savrans</p>
        <ul className="social-icons">
          <li><a href="https://www.facebook.com/nikola.treimane"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://www.instagram.com/nikaengblog/"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://t.me/speakwithnicyole"><i className="fab fa-telegram"></i></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
