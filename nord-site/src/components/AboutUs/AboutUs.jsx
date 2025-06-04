// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section id="about" className={styles.aboutWrapper}>
      <h2 className={styles.title}>О нас</h2>
      <p className={styles.description}>
        Мы — команда разработчиков с многолетним опытом в автоматизации бизнес-процессов.
        Наш продукт поможет вам оптимизировать закупки, финансы, логистику и многое другое.
      </p>
      <h3 className={styles.subtitle}>Интеграции и синхронизация</h3>
      <ul className={styles.integrationList}>
        <li>API для внешних решений</li>
        <li>Интеграция с 1С:Бухгалтерия</li>
        <li>Работа с Excel и Google Таблицами</li>
        <li>Возможность подключить ваше собственное ПО</li>
      </ul>
    </section>
  );
}
