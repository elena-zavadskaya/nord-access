// src/components/Contacts/Contacts.jsx
import React from 'react';
import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contactsWrapper}>
      <h2 className={styles.title}>Контакты</h2>
      <ul className={styles.contactList}>
        <li>
          <strong>Электронная почта:</strong>{' '}
          <a href="mailto:nafta-centr@yandex.ru" className={styles.link}>
            nafta-centr@yandex.ru
          </a>
        </li>
        <li>
          <strong>Телефон:</strong>{' '}
          <a href="tel:+79032640008" className={styles.link}>
            +7 (903) 264-00-08
          </a>
        </li>
        <li>
          <strong>Адрес:</strong> Москва, ул. Плеханова, д.7, помещение 16Н/4
        </li>
      </ul>
      <div className={styles.socials}>
        {/* Если есть соцсети, можно поставить иконки */}
        <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer" className={styles.socialLink}>
          Telegram
        </a>
        {' | '}
        <a href="https://vk.com/yourvk" target="_blank" rel="noreferrer" className={styles.socialLink}>
          ВКонтакте
        </a>
      </div>
    </section>
  );
}
