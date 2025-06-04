// src/components/Contacts.jsx
import React from 'react';
import './styles/Contacts.css';

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="container contacts__inner">
        <h3 className="contacts__title">Контакты</h3>
        <ul className="contacts__list">
          <li>Email: <a href="mailto:info@nord-cap.ru">info@nord-cap.ru</a></li>
          <li>Телефон: <a href="tel:+79032640008">+7 (903) 264-00-08</a></li>
          <li>Адрес: 111141, г. Москва, ул. Плеханова, д. 7, помещение 16Н/4</li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
