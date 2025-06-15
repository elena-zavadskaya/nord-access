import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
      <footer id="contacts" className="footer">
        <div className="container footer__inner">
          <div className="footer__company-info">
            <p>ООО “НОРД КАПИТАЛ”</p>
            <p>Юридический адрес: 111141 г. Москва, вн.тер.г. муниципальный округ Перово, ул. Плеханова, Д.7, помещение
              16Н/4</p>
          </div>

          <div className="footer__contacts">
            <p>info@nordcapital.ru</p>
            <p>+7 (495) 123-45-67</p>
          </div>

          <div className="footer__links">
            <a href="/user-agreement.pdf" target="_blank" rel="noopener noreferrer">
              Пользовательское соглашение
            </a>
            <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer">
              Политика обработки персональных данных
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;