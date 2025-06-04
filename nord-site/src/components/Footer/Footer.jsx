// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} НОРД-КАПИТАЛ. Все права защищены.
      </p>
      <div className={styles.links}>
        <a href="/terms" className={styles.link}>Пользовательское соглашение</a>
        <span className={styles.separator}>|</span>
        <a href="/privacy" className={styles.link}>Политика обработки персональных данных</a>
      </div>
    </footer>
  );
}
