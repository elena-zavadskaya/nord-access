// src/components/Footer.jsx
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© НОРД-КАПИТАЛ, 2025</p>
        <div className="footer__links">
          <a href="/user-agreement.pdf">Пользовательское соглашение</a>
          <span className="footer__separator">|</span>
          <a href="/privacy-policy.pdf">Политика обработки персональных данных</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
