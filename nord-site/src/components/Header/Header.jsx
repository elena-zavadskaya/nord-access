// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.css';

// Предположим, что логотип лежит в src/assets/logo.png
// import logoImg from '../../assets/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/*<img src={logoImg} alt="Логотип" className={styles.logo} />*/}
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#hero">Главная</a></li>
          <li><a href="#overview">Обзор</a></li>
          <li><a href="#modules">Модули</a></li>
          <li><a href="#features">Возможности</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </nav>

      <div className={styles.userButtonContainer}>
        <button className={styles.userButton}>Личный кабинет</button>
      </div>
    </header>
  );
}
