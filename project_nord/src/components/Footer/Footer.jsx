// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className="container">
        <div className={styles.infoWrapper}>
          <p>ООО “НОРД КАПИТАЛ”</p>
          <p>Юридический адрес: 11141 г. Москва, внутриг. муниципальный округ Перово, ул. Плеханова, д. 7, помещение 16Н/4</p>
          <p>Email: info@nord-cap.ru</p>
          <p>Тел.: +7 (903) 264-00-08</p>
        </div>
        <div className={styles.upWrapper}>
          <a href="#home" className={styles.upButton}>&uarr;</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
