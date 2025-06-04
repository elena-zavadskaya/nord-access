import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <div className={styles.logoWrapper}>
          <a href="#home">
            <img src={logo} alt="АКСЕСС" className={styles.logo} />
          </a>
        </div>

        {/* Навигация */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#home">Главная</a></li>
            <li className={styles.navItem}><a href="#overview">Обзор</a></li>
            <li className={styles.navItem}><a href="#modules">Модули</a></li>
            <li className={styles.navItem}><a href="#features">Возможности</a></li>
            <li className={styles.navItem}><a href="#about">О нас</a></li>
            <li className={styles.navItem}><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>

        {/* Кнопка «Личный кабинет» */}
        <div className={styles.loginWrapper}>
          <a href="/login" className={styles.loginButton}>
            Личный кабинет
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
